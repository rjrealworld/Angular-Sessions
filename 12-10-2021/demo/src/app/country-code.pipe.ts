import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {
  codes: any;
  transform(value: any, country: string): string {
    this.codes = {'India': '91', 'USA': '1', 'Pakistan': '92', 'China': '86', 'Africa': '27'};
    return "+" + this.codes[country] + "-" + value;
  }

}