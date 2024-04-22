import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
    // private authService: AuthService,
    // private cookieManager: CookieManagerService
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigateByUrl('/console').then()
    // this.authService.login(
    //   this.loginForm.get('email')?.value!,
    //   this.loginForm.get('password')?.value!
    // )
    //   .pipe(first())
    //   .subscribe(
    //     (data: HttpResponse<any>) => {
    //       this.cookieManager.setToken(data.headers.get('Authorization')!);
    //       this.router.navigateByUrl('/console').then()
    //     });
  }

}
