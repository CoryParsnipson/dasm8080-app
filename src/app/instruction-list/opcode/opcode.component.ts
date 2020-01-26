import { Component, Input, OnInit } from '@angular/core';
import { TYPE } from '8080dasm';

@Component({
  selector: 'app-opcode',
  templateUrl: './opcode.component.html',
  styleUrls: ['./opcode.component.scss']
})
export class OpcodeComponent implements OnInit {
   @Input() value: string
   @Input() opType: string

   constructor() { }

   ngOnInit() {
   }
}
