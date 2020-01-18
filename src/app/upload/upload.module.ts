import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout'
import {
   MatButtonModule,
   MatDialogModule,
   MatListModule,
   MatProgressBarModule,
} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DialogComponent } from './dialog/dialog.component'
import { UploadComponent } from './upload.component'
import { UploadService } from './upload.service'

@NgModule({
  declarations: [UploadComponent, DialogComponent],
  exports: [UploadComponent],
  entryComponents: [DialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  providers: [UploadService],
})
export class UploadModule {}
