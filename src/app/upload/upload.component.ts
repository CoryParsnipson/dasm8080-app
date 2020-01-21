import { Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material'
import { forkJoin } from 'rxjs/observable/forkJoin'
import { UploadService } from './upload.service'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
   @ViewChild('file', { static: false }) file
   @ViewChild('uploadlist', { read: ElementRef, static: false }) uploadList
   @Input() allowMultiple = false

   files: Set<File> = new Set()
   progress
   primaryButtonText = 'Upload a Binary'
   showUploadProgress = true
   uploading = false

   constructor(
      public dialog: MatDialog,
      public uploadService: UploadService,
      private componentFactoryResolver: ComponentFactoryResolver) {}

   ngOnInit() {
   }

   addFiles() {
      this.file.nativeElement.click();
   }

   onFilesAdded() {
      const files: { [key: string]: File } = this.file.nativeElement.files;

      this.files.clear(); // remove old files when user uploads a new one
      for (let key in files) {
         if (!isNaN(parseInt(key))) {
            this.files.add(files[key]);
         }
      }

      this.submitFiles();
   }

   submitFiles() {
      // set the component state to "uploading"
      this.uploading = true;
      this.showUploadProgress = true;

      // TODO: turn this into an animated slide down to visible (do nothing if already visible)
      // https://stackoverflow.com/questions/47248898/angular-4-5-6-7-simple-example-of-slide-in-out-animation-on-ngif
      this.uploadList.nativeElement.style.display = '';

      // start the upload and save the progress map
      this.progress = this.uploadService.upload(this.files);

      // convert the progress map into an array
      let allProgressObservables = [];
      for (let key in this.progress) {
         allProgressObservables.push(this.progress[key].progress);
      }

      this.primaryButtonText = 'Upload another Binary';

      // when all progress-observables are completed...
      forkJoin(allProgressObservables).subscribe(complete => {
         // add delay for aesthetics
         setTimeout(() => {
            this.uploading = false;
            this.showUploadProgress = false;

            // TODO: turn this into an animated slide up into nothing
            // https://stackoverflow.com/questions/47248898/angular-4-5-6-7-simple-example-of-slide-in-out-animation-on-ngif
            this.uploadList.nativeElement.style.display = 'none';
         }, 2000);
      });
   }
}
