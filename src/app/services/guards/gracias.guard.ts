import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraciasGuard implements CanActivate {
  constructor( public router: Router) {}
  canActivate() {
    let comercial = localStorage.getItem('comercial');

    if ( comercial === null ) {
      this.router.navigate(['/landing']);
     return false;
    } else {
      return true;
    }
  }
}
