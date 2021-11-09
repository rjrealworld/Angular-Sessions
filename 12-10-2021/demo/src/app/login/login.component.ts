import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginId: string;
  password: string;
  employees: any;

  constructor(private router: Router, private authGuard: AuthGuard) {
    this.loginId = '';
    this.password = '';
    this.employees = [
      { "empId": 1, "empName": 'user1', "gender": 'Female', "salary": 100000.00, "doj": '07-03-2020', "email": 'user1@demo.com', "password": 'user1' },
      { "empId": 2, "empName": 'user2', "gender": 'Male', "salary": 500000.00, "doj": '20-08-2021', "email": 'user2@demo.com', "password": 'user2' },
      { "empId": 3, "empName": 'user3', "gender": 'Female', "salary": 600000.00, "doj": '01-11-2020', "email": 'user3@demo.com', "password": 'user3' },
      { "empId": 4, "empName": 'user4', "gender": 'Female', "salary": 90000.00, "doj": '15-05-2019', "email": 'user4@demo.com', "password": 'user4' },
      { "empId": 5, "empName": 'user5', "gender": 'Male', "salary": 80000.00, "doj": '15-09-2021', "email": 'user5@demo.com', "password": 'user5' },
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
    console.log(loginForm);
    if (loginForm.email === 'HR' && loginForm.password === 'HR') {
      // alert('Login successful');
      this.router.navigate(['hrpage']);
      this.authGuard.setLoggedIn();
    }
    else {
      this.employees.forEach((employee: any) => {
        if ((loginForm.email === employee.email) && (loginForm.password === employee.password)) {
          alert('Welcome to employee page....');
          this.authGuard.setLoggedIn();
        }
      });
    }
  }

}
