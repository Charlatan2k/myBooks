import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookRef',
})
export class BookRefPipe implements PipeTransform {
  transform(value: number): string {
    return `Ref-${value}`;
  }
}
