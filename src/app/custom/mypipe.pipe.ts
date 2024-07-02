import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string[], ...args: string[]): string[] {
    //sample 1
    // let val = value as string;
    // let prefix = args[0];
    // let fillChar = args[1];
    // let newval = val.toString().padStart(10, fillChar);

    // return prefix + newval;

    let searchText = args[0];
    let newarr = value.filter(a => a.indexOf(searchText) != -1);
    return newarr;

  }

}
