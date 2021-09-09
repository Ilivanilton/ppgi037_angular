import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import { AccountService } from '../authentication/shared/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private accountService: AccountService,
    private router: Router
  ){}

  canLoad(
    route: import("@angular/router").Route,
    segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.verificarAcesso();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verificarAcesso();
  }

  private verificarAcesso(){
    if(this.accountService.usuarioAutenticado) return true
    this.router.navigate(['/'])
    return false;
  }

}
