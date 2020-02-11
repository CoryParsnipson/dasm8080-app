import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
   useLightTheme = false
   falseLabel = "Light"
   trueLabel = "Dark"
   label: string

   constructor() { }

   ngOnInit() {
      this.label = this.falseLabel;
   }

   switchTheme(event: any) {
      this.useLightTheme = !this.useLightTheme;
      this.label = this.useLightTheme ? this.trueLabel : this.falseLabel;
   }
}
