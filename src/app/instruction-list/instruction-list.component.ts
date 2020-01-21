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
            console.log(JSON.stringify(res));
         },
      });
   }
}
