import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HexadecimalPipe } from '../hexadecimal.pipe';
import { InstructionComponent } from './instruction/instruction.component';
import { InstructionListComponent } from './instruction-list.component';
import { OperandsComponent } from './operands/operands.component';

@NgModule({
  declarations: [
     HexadecimalPipe,
     InstructionComponent,
     InstructionListComponent,
     OperandsComponent,
  ],
  exports: [
     InstructionListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class InstructionListModule { }
