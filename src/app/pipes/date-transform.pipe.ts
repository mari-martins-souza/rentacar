import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform',
  standalone: true
})
export class DateTransformPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.substring(0, 4);
}

}
