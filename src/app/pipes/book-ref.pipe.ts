import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookRef',
})
export class BookRefPipe implements PipeTransform {
  transform(id: number): string {
    return `Ref-${id}`;
  }
}
