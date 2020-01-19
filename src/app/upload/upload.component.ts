import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
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
   @Input() allowMultiple = false

   files: Set<File> = new Set()
   progress
   canBeClosed = true
   primaryButtonText = 'Upload'
   showCancelButton = true
   uploading = false
   uploadSuccessful = false

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
      for (let key in files) {
         if (!isNaN(parseInt(key))) {
            this.files.add(files[key]);
         }
      }
   }

   closeDialog() {
      // if everything was uploaded already, just close the dialog
      // TODO: replace this with directive close
      //if (this.uploadSuccessful) {
      //   return this.dialogRef.close();
      //}

      // set the component state to "uploading"
      this.uploading = true;

      // start the upload and save the progress map
      this.progress = this.uploadService.upload(this.files);

      // convert the progress map into an array
      let allProgressObservables = [];
      for (let key in this.progress) {
         allProgressObservables.push(this.progress[key].progress);
      }

      // the OK-button should have the text "Finish" now
      this.primaryButtonText = 'Finish';

      // dialog should not be closed while uploading
      this.canBeClosed = false;
      // TODO: replace this with directive close
      //this.dialogRef.disableClose = true;
      this.showCancelButton = false;

      // when all progress-observables are completed...
      forkJoin(allProgressObservables).subscribe(end => {
         // ... the dialog can be closed again...
         this.canBeClosed = true;
         // TODO: replace this with directive close
         //this.dialogRef.disableClose = false;
         this.uploadSuccessful = true;
         this.uploading = false;
      });
   }
}
