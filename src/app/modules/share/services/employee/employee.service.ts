import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {RequestBranchDTO} from "../../dto/request/RequestBranchDTO";
import {Observable} from "rxjs";
import {RequestEmployeeDTO} from "../../dto/request/RequestEmployeeDTO";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient
    ) {
    }

    newEmployee(employee: RequestEmployeeDTO): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'user-role/business/create', {});
    }

    getById(selectedPropertyId: any): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'user-role/business/create', {});
    }

    allEmployees(): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'user-role/business/create');
    }

    changeEmployment(propertyId: any): Observable<any> {
        return this.http.put<any>(this.baseUrl + 'user-role/business/create', {});
    }

    changeState(propertyId: any): Observable<any> {
        return this.http.put<any>(this.baseUrl + 'user-role/business/create', {});
    }

}
