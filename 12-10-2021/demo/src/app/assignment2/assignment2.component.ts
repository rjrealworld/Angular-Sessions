import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  user: any;
  constructor() {
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
  }

  submit(): void {
    console.log(this.user);
  }

}
