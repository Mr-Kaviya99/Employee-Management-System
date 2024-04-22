import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {LoadingService} from "../services/loading/loading.service";
import {CookieManagerService} from "../services/cookie/cookie-manager.service";

@Injectable()
export class HttpHandlerInterceptor implements HttpInterceptor {

  constructor(private _loadingService: LoadingService, private cookieManager: CookieManagerService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadingService.mainLoader.next(true);

    if (this.cookieManager.tokenIsExists('token')){
      // console.log(this.cookieManager.getToken())
      request = request.clone({
        setHeaders: { Authorization: this.cookieManager.getToken() }
      });
    }

    return next.handle(request).pipe(
      catchError(err => {
        if (err.status == 401 || err.status == 403) {
          alert('Unauthorized');
        } else {

        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      }),
      finalize(() => {
        this._loadingService.mainLoader.next(false);
      })
    );
  }
}
