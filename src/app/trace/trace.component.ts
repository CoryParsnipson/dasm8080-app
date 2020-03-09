import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Instruction } from '../instruction-list/instruction';

@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.scss']
})
export class TraceComponent implements OnInit {
   title: string = "Example Loading..."
   opened: boolean = false
   instructions: Instruction[] = []
   filename: string
   tracefile: string

   constructor(
      private route: ActivatedRoute,
      private http: HttpClient
   ) {}

   ngOnInit() {
      this.route.paramMap.subscribe(paramMap => {
         this.tracefile = paramMap.get('json');
         this.initializeComponent();

         this.http.get('assets/examples/' + this.tracefile, { responseType: 'text'}).subscribe((data) => {
            this.loadTrace(data);
         });
      });
   }

   initializeComponent() {
      this.filename = "";
      this.instructions = [];
      this.title = "Example Loading..."
   }

   loadTrace(data: string) {
      var dataObj = JSON.parse(data);

      this.filename = Object.keys(dataObj)[0];
      this.title = 'Example Binary: ' + this.filename;
      this.instructions = [];

      Object.values(dataObj[this.filename]).forEach(instrData => {
         var inst: Instruction = new Instruction();
         
         inst.addr = instrData['addr'];
         inst.file = instrData['file'];
         inst.num_bytes = instrData['num_bytes'];
         inst.opcode = instrData['opcode'];
         inst.operands = instrData['operands'];
         inst.raw = [];
         for (let b of instrData['raw']['data'].values()) {
            inst.raw.push(b);
         }
         inst.type = instrData['type'];

         this.instructions.push(inst);
      });
   }
}
