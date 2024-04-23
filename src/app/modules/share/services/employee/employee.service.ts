import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
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

    newEmployee(employee: RequestEmployeeDTO, branchId: any, userTypeId: any): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'employees/create?branchId=' + branchId + '&userTypeId=' + userTypeId, employee);
    }

    getById(selectedPropertyId: any): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'employees/get-by-id?employeeId=' + selectedPropertyId);
    }

    allEmployees(employmentState: string, employeeAvailability: string, branch: string, userType: string): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'employees/get-all?branchId=' + branch + '&employmentState=' + employmentState + '&employeeAvailability=' + employeeAvailability + '&userTypeId=' + userType);
    }

    changeEmployment(propertyId: any, employmentState: boolean): Observable<any> {
        return this.http.put<any>(this.baseUrl + 'employees/change-employment-state?employeeId=' + propertyId + '&employmentState=' + employmentState, {});
    }

    changeState(propertyId: any, activeState: boolean): Observable<any> {
        return this.http.put<any>(this.baseUrl + 'employees/change-state?employeeId=' + propertyId + '&state=' + activeState, {});
    }

}
