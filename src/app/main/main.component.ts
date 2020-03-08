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
   opened = false;
   instructions: Instruction[] = []
   filename: string

   funfactDB = [
      "you're watching jackass",
      "I haven't pooped in six years",
      "I like tomatoes",
      "th--why are you looking at me like that?",
      "AAAAAHHH BEEEES",
      "please help me I'm trapped in a open office layout",
      "I like web development, programming, games, and drawing",
   ]

   funfact = ""

   constructor(
      public uploadService: UploadService
   ) {}

   ngOnInit() {
      let idx = Math.floor(Math.random() * this.funfactDB.length);
      this.funfact = this.funfactDB[idx];

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
