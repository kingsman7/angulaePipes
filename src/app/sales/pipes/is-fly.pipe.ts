import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFly'
})
export class IsFlyPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'vuela' : 'no vuela';
  }

}
