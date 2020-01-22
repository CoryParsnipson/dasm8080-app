export class Instruction {
   addr: number; // memory address of this instruction within system memory
   file: number; // file handle integer
   num_bytes: number; // number of bytes this instruction spans
   opcode: string;
   operands: Object;
   raw: number[];
}
