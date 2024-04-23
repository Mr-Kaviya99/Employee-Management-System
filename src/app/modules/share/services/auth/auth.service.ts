import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'system-users/login?userName=' + email + '&password=' + password,
            {});
    }
}
