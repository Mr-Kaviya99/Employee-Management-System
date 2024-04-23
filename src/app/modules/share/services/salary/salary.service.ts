import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {RequestBranchDTO} from "../../dto/request/RequestBranchDTO";
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

    newSalary(salary: RequestSalaryDTO): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'user-role/business/create', {});
  }

  allSalaries(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'user-role/business/create');
  }

}
