import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotToComma',
  standalone: true
})
export class DotToCommaPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\./g, ',');
  }

}
