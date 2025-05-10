import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeCaps',
  standalone: true,
})
export class MakeCaps implements PipeTransform {
  transform(value: string) {
    const firstChar = value[0];
    if (firstChar !== firstChar.toUpperCase()) {
      value = value[0].toUpperCase() + value.substring(1).toLowerCase();
    }
    return value;
  }
}
