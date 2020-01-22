import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstructionListModule } from './instruction-list/instruction-list.module';
import { UploadModule } from './upload/upload.module';

@NgModule({
  declarations: [
     AppComponent,
  ],
  imports: [
     BrowserModule,
     FormsModule,
     InstructionListModule,
     UploadModule,
  ],
  providers: [],
  bootstrap: [
     AppComponent
  ]
})
export class AppModule { }
