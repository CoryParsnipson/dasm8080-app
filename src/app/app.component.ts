import { Component } from '@angular/core';
import { Instruction } from './instruction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dasm8080-app';
  
  instructions: Instruction[] = [
     { "op": "MOV" },
     { "op": "SUI" },
  ];
}
