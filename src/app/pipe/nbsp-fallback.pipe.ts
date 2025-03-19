import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nbspFallback'
})
export class NbspFallbackPipe implements PipeTransform {

  transform(value: string): string {
    if (value?.trim()) {
      return value;
    } else {
      return '&nbsp;';
    }
  }

}
