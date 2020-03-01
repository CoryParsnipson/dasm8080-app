import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operands',
  templateUrl: './operands.component.html',
  styleUrls: ['./operands.component.scss']
})
export class OperandsComponent implements OnInit {
   @Input() data: any

   constructor() { }

   ngOnInit() {
   }
}
