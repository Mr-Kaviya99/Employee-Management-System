import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestSalaryDTO} from "../../dto/request/RequestSalaryDTO";

@Injectable({
    providedIn: 'root'
})
export class SalaryService {
    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient
    ) {
    }

    newSalary(salary: RequestSalaryDTO, userType: any): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'salaries/create?userTypeId=' + userType, salary);
    }

    allSalaries(month: string): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'salaries/get-all?month=' + month);
    }

}
