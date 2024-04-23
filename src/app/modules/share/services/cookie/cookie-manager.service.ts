import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CookieManagerService {

    constructor(
        private cookieService: CookieService,
        private router:Router
    ) {

    }

    public setToken(token: string) {
        this.cookieService.set('token', token, 90);
    }

    public tokenIsExists(name: string): boolean {
        return this.cookieService.check(name);
    }

    public getToken(): string {
        return this.cookieService.get('token');
    }

    public logout() {
        this.cookieService.deleteAll();
        this.router.navigateByUrl('/security/login');
    }

}
