import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../share/services/auth/auth.service";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";
import {first} from "rxjs";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    passwordState = true;

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required,]),
    });

    constructor(
        private router: Router,
        private authService: AuthService,
        private cookieManager: CookieManagerService,
        private snackBarService: SnackBarService
    ) {
    }

    ngOnInit(): void {
    }

    login() {

        this.authService.login(
            this.loginForm.get('email')?.value!,
            this.loginForm.get('password')?.value!
        )
            .pipe(first())
            .subscribe(data => {
                if (data?.code == 200) {
                    const randomId = this.generateRandomId(50);
                    this.cookieManager.setToken(randomId!);
                    console.log(this.cookieManager.getToken());
                    this.router.navigateByUrl('/console').then()
                } else {
                    this.snackBarService.openErrorSnackBar('Unauthorized!', 'Close');
                }

            });
    }

    generateRandomId(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';
        for (let i = 0; i < length; i++) {
            randomId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomId;
    }

}
