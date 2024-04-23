import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {RequestBranchDTO} from "../../dto/request/RequestBranchDTO";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BranchService {
    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient
    ) {
    }

    newBranch(branch: RequestBranchDTO): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'branch/create', branch);
    }

    allBranches(): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'branch/get-all');
    }

    deleteBranch(propertyId: any): Observable<any> {
        return this.http.delete<any>(this.baseUrl + 'branch/' + propertyId);
    }
}
