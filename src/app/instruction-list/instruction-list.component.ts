import { Component, OnInit, Input } from '@angular/core'

import { Instruction } from './instruction';

@Component({
  selector: 'app-instruction-list',
  templateUrl: './instruction-list.component.html',
  styleUrls: ['./instruction-list.component.scss']
})
export class InstructionListComponent implements OnInit {
   @Input() filename: string
   @Input() instructions: Instruction[]

   constructor() {}

   ngOnInit() {
   }
}
