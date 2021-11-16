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
    // return this.getLoggedIn();
    return true;
  }

  public setLoggedIn() {
    this.isLoggedIn = true;
  }

  public setLoggedOut() {
    this.isLoggedIn = false;
  }

  public getLoggedIn() {
    return this.isLoggedIn;
  }

}
