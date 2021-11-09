import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  user: any;
  constructor(private service: EmployeeService) {
    this.user = {
      empId: "",
      empName: "",
      gender: "",
      salary: "",
      doj: "",
      loginId: "",
      password: ""
    };
  }

  ngOnInit(): void {
    this.service.getCountries();
  }

  submit(): void {
    console.log(this.user);
  }

}
