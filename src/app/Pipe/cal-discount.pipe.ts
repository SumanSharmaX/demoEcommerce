import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calDiscount'
})
export class CalDiscountPipe implements PipeTransform {

  transform(value: number,discount :number): unknown {
    return value-((value*discount)/100);
  }
}

