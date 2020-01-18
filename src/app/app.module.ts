import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstructionComponent } from './instruction/instruction.component';
import { UploadModule } from './upload/upload.module'

@NgModule({
  declarations: [
    AppComponent,
    InstructionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
