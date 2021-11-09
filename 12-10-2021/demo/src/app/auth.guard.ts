import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isLoggedIn: any;

  constructor() { 
    this.isLoggedIn = false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLoggedIn;
  }

  public setLoggedIn() {
    this.isLoggedIn = true;
  }

  public getLoggedIn() {
    return this.isLoggedIn;
  }

  public setLoggedOut() {
    this.isLoggedIn = false;
  }
  
}
