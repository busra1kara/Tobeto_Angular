import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appVat',
  standalone: true,
})
export class VatPipe implements PipeTransform {

  transform(value: number, taxRate: number): number {
    const newValue = value + value * (taxRate / 100);
    return newValue;
  }

}
