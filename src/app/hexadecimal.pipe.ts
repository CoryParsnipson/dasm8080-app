import { Pipe, PipeTransform } from '@angular/core';

/*
 * Convert a decimal number to hexadecimal.
 * Usage:
 *   value | hexadecimalPipe: prefix:padding
 *
 * Examples:
 *   {{ 2 | hexadecimalPipe: "0x":2 }} formats to 0x02
 *   {{ 12 | hexadecimalPipe: "H":0 }} formats to HC
 */
@Pipe({name: 'hexadecimalPipe'})
export class HexadecimalPipe implements PipeTransform {
   transform(value: number, prefix?: string, padding?: number): string {
      if (value === null || value === undefined) {
         return '';
      }
      
      var hex_str = value.toString(16).toUpperCase();
      const hex_str_len = hex_str.length;

      for (let i = hex_str_len; i < padding; ++i) {
         hex_str = '0' + hex_str;
      }

      return prefix + hex_str;
   }
}
