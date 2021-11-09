import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-hr-page',
  templateUrl: './hr-page.component.html',
  styleUrls: ['./hr-page.component.css']
})
export class HrPageComponent implements OnInit {

  constructor(private router: Router, private authGuard: AuthGuard) { }

  ngOnInit(): void {
  }

  loginSubmit2() {
    console.log('loginSubmit2');
    this.router.navigate(['login']);
    this.authGuard.setLoggedOut();
  }
}
