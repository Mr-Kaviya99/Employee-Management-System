import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {CookieManagerService} from "../services/cookie/cookie-manager.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieManager: CookieManagerService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.cookieManager.tokenIsExists('token')) {
      return true;
    } else {
      this.router.navigateByUrl('/security');
      return false;
    }
  }

}
