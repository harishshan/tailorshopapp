import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(originalString: string, fromString: string, toString: string): any {
    return originalString.split(fromString).join(toString);
  } 
}
