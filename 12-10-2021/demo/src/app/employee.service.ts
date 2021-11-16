import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  a: any;
  data: any;
  constructor(private httpClient: HttpClient) { 
    this.data = [];
  }

  getCountries() {
    // this.httpClient.get('https://restcountries.com/v3.1/all').subscribe((result: any) => console.log(result));
    this.httpClient.get('https://restcountries.com/v3.1/all').subscribe((result: any) => {
      // this.data = result;
      // for (let data of this.data) {
      //   // console.log(data.name);
      // };
      // // console.log(this.a);
      console.log(result);
    });
    // console.log(this.data);

    // return this.data;
  }
}
