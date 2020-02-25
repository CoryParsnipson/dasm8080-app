import { Injectable } from '@angular/core'
import { forkJoin } from 'rxjs/observable/forkJoin'
import {
   HttpClient,
   HttpRequest,
   HttpEventType,
   HttpResponse,
} from '@angular/common/http'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { AmplifyService } from 'aws-amplify-angular';

// this comes from endpoint defined from express.js server
//const url = 'http://localhost:8000/upload'
const url = 'https://kvtsj3ia7l.execute-api.us-west-2.amazonaws.com/dev/upload'

@Injectable({
  providedIn: 'root'
})
export class UploadService {
   private res: HttpResponse<any>
   private uploadComplete: Subject<HttpResponse<any>>

   constructor(private http: HttpClient, private amplifyService: AmplifyService) {
      this.uploadComplete = new Subject<HttpResponse<any>>();
   }

   public upload(files: Set<File>): { [key: string]: { progress: Observable<number> } } {
      // resulting map (notice how it is the same as the return type of this function)
      const status: { [key: string]: { progress: Observable<number> } } = {};

      files.forEach(file => {
         // create a new multipart-form for every file
         const formData: FormData = new FormData();
         formData.append('file', file, file.name);

         // create a http-post request and pass the form to tell it to report the upload progress
         const req = new HttpRequest('POST', url, formData, {
            reportProgress: true
         });

         // create a new progress-subject for every file
         const progress = new Subject<number>();

         // send the http-request and subscribe for progress-updates
         this.http.request(req).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
               // calculate the progress percentage
               const percentDone = Math.round(100 * event.loaded / event.total);
               
               // pass the percentage into the progress stream
               progress.next(percentDone);
            } else if (event instanceof HttpResponse) {
               // save the HttpResponse so that we can access it later
               this.res = event;

               // close the progress-stream if we get an answer from the API
               progress.complete();
            }
         });

         // save every progress-observable in a map of all observable
         status[file.name] = {
            progress: progress.asObservable()
         };
      });

      // forkJoin this and emit an event to uploadComplete observer
      let allObservables = [];
      for (let key in status) {
         allObservables.push(status[key].progress);
      }
      forkJoin(allObservables).subscribe(complete => {
         this.uploadComplete.next(this.res);
      });

      return status;
   }

   public subscribe(observer) {
      this.uploadComplete.subscribe(observer);
   }
}
