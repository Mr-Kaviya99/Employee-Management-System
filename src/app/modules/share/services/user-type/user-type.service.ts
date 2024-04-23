import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestUserTypeDTO} from "../../dto/request/RequestUserTypeDTO";

@Injectable({
    providedIn: 'root'
})
export class UserTypeService {
    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient
    ) {
    }

    newUserType(userType: RequestUserTypeDTO): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'user-types/create', userType);
    }

    allUserTypes(): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'user-types/get-all');
    }

    deleteUserType(propertyId: any): Observable<any> {
        return this.http.delete<any>(this.baseUrl + 'user-types/' + propertyId);
    }

    getUserTypeCount(): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'user-types/get-user-type-count');
    }
}
