import {Component, OnInit,} from '@angular/core';
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";
import {BranchService} from "../../../share/services/branch/branch.service";
import {UserTypeService} from "../../../share/services/user-type/user-type.service";
import {EmployeeService} from "../../../share/services/employee/employee.service";
import {SnackBarService} from "../../../share/services/snack-bar/snack-bar.service";

@Component({
    selector: 'app-console-default',
    templateUrl: './console-default.component.html',
    styleUrls: ['./console-default.component.scss']
})
export class ConsoleDefaultComponent implements OnInit {

    selectedData: any;
    branchCount: any;
    userTypeCount: any;
    employeeCount: any;

    constructor(
        private cookieManagerService: CookieManagerService,
        private branchService: BranchService,
        private userTypeService: UserTypeService,
        private employeeService: EmployeeService,
        private snackBarService: SnackBarService,
    ) {

    }

    ngOnInit(): void {
        this.loadBranchCount();
        this.loadUserTypeCount();
        this.loadEmployeeCount();
    }

    loadBranchCount() {
        this.branchService.getBranchCount().subscribe(response => {
            this.branchCount = response?.data?.count;
        }, error => {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        })

    }
    loadUserTypeCount() {
        this.userTypeService.getUserTypeCount().subscribe(response => {
            this.userTypeCount = response?.data?.count;
        }, error => {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        })

    }
    loadEmployeeCount() {
        this.employeeService.getEmployeeCount().subscribe(response => {
            this.employeeCount = response?.data?.count;
        }, error => {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        })

    }

    logout() {
        this.cookieManagerService.logout();
    }
}
