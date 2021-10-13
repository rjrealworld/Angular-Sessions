import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginId: string;
  password: string;

  constructor() { 
    this.loginId = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  loginSubmit(): void {
    if (this.loginId === 'HR' && this.password === 'HR') 
      alert('Login successful');
    else 
      alert('Login failed');
  }

}
