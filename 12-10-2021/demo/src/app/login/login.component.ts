import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginId: string;
  password: string;
  employees: any;

  constructor() { 
    this.loginId = '';
    this.password = '';
    this.employees = [
      {"empId": 1, "empName": 'user1', "gender": 'Female', "salary": 100000.00, "doj": '07-03-2020', "loginId": 'user1', "password": 'user1'},
      {"empId": 2, "empName": 'user2', "gender": 'Male', "salary": 500000.00, "doj": '20-08-2021', "loginId": 'user2', "password": 'user2'},
      {"empId": 3, "empName": 'user3', "gender": 'Female', "salary": 600000.00, "doj": '01-11-2020', "loginId": 'user3', "password": 'user3'},
      {"empId": 4, "empName": 'user4', "gender": 'Female', "salary": 90000.00, "doj": '15-05-2019', "loginId": 'user4', "password": 'user4'},
      {"empId": 5, "empName": 'user5', "gender": 'Male', "salary": 80000.00, "doj": '15-09-2021', "loginId": 'user5', "password": 'user5'},
    ]
  }

  ngOnInit(): void {
  }

  loginSubmit(): void {
    if (this.loginId === 'HR' && this.password === 'HR') 
      alert('Login successful');
    else {
      this.employees.forEach((employee: any) => {
        if ((this.loginId === employee.loginId) && (this.password === employee.password)) {
          alert('Welcome to employee page....');
        }
      });
    }
  }

  loginSubmit2(loginForm: any) {
      alert('Login form executed....');
  }

}
