import { Component, OnInit } from '@angular/core';

import { Instruction } from '../instruction-list/instruction';
import { UploadService } from '../upload/upload.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
   title = 'Online Intel 8080 Disassembler';
   instructions: Instruction[] = []
   filename: string

   constructor(
      public uploadService: UploadService
   ) {}

   ngOnInit() {
      this.uploadService.subscribe({
         next: res => {
            // get rid of old disassembly artifacts
            this.instructions.splice(0, this.instructions.length);

            for (let [filename, binary] of Object.entries(res.body)) {
               this.filename = filename;

               Object.values(binary).forEach(instrJSON => {
                  var instr: Instruction = new Instruction();

                  // unpack JSON data fields into Instruction class
                  instr.addr = instrJSON.addr;
                  instr.file = instrJSON.file;
                  instr.num_bytes = instrJSON.len;
                  instr.opcode = instrJSON.opcode;
                  instr.operands = instrJSON.operands;
                  instr.raw = [];
                  for (let b of instrJSON.raw.data.values()) {
                     instr.raw.push(b);
                  }
                  instr.type = instrJSON.type;

                  this.instructions.push(instr);
               });
            }
         },
      });
   }
}
