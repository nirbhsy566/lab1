import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uperdollar'
})
export class UperdollarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
