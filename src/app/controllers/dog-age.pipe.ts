import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dogAge'
})
export class DogAgePipe implements PipeTransform {

  transform(name1: string, args: any): string {
    let toReturn = name1.length;
    toReturn = Math.pow(toReturn, args.numIn);
    return toReturn.toString() + args.unit;
  }

}
