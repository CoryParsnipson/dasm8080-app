import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UploadComponent } from './upload.component'
import { UploadService } from './upload.service';

@NgModule({
  declarations: [
     UploadComponent,
  ],
  exports: [
     UploadComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
     UploadService,
  ],
})
export class UploadModule {}
