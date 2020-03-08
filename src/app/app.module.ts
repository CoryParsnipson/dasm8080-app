import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { InstructionListModule } from './instruction-list/instruction-list.module';
import { UploadModule } from './upload/upload.module';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
   {
      path: '',
      component: MainComponent,
      data: {}
   },
   {
      path: 'examples/:json',
      component: MainComponent,
   },
];

@NgModule({
  declarations: [
     AppComponent,
     ThemeSwitcherComponent,
     MainComponent,
  ],
  imports: [
     BrowserModule,
     ClarityModule,
     FormsModule,
     InstructionListModule,
     RouterModule.forRoot(appRoutes, {}),
     UploadModule,
  ],
  providers: [],
  bootstrap: [
     AppComponent
  ]
})
export class AppModule { }
