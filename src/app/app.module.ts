import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { InstructionListModule } from './instruction-list/instruction-list.module';
import { UploadModule } from './upload/upload.module';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [
     AppComponent,
     ThemeSwitcherComponent,
  ],
  imports: [
     BrowserModule,
     ClarityModule,
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
