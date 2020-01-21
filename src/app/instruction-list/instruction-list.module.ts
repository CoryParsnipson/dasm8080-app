import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InstructionComponent } from './instruction/instruction.component';
import { InstructionListComponent } from './instruction-list.component';

@NgModule({
  declarations: [
     InstructionComponent,
     InstructionListComponent,
  ],
  exports: [
     InstructionListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class InstructionListModule { }
