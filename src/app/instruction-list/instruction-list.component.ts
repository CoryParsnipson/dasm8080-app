import { Component, OnInit } from '@angular/core'
import { Instruction } from './instruction';
import { UploadService } from '../upload/upload.service'

@Component({
  selector: 'app-instruction-list',
  templateUrl: './instruction-list.component.html',
  styleUrls: ['./instruction-list.component.scss']
})
export class InstructionListComponent implements OnInit {
   instructions: Instruction[] = []

   constructor(
      public uploadService: UploadService
   ) {}

   ngOnInit() {
      this.uploadService.subscribe({
         next: res => {
            // TODO: supply binary as @Input or something, make 1 instruction-list per binary
            Object.values(res.body).forEach(binary => {
               Object.values(binary).forEach(instrJSON => {
                  var instr: Instruction = new Instruction();

                  // unpack JSON data fields into Instruction class
                  // (TODO: probably a better way of doing this using type-safe RPC calls or something)
                  instr.op = instrJSON.opcode;

                  this.instructions.push(instr);
               });
            });
         },
      });
   }
}
