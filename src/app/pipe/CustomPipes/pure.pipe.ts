import { Pipe, PipeTransform } from '@angular/core';
import { NewCompany } from 'src/app/model/newcompany';


@Pipe({
  name: 'purePipe'
})
export class PurePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(obj: NewCompany): string {
    const output = obj.cname + ' : ' + obj.location;
    return output;
  }

}
