import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EmployeeService} from "../../../../../../share/services/employee/employee.service";
import {SnackBarService} from "../../../../../../share/services/snack-bar/snack-bar.service";

@Component({
    selector: 'app-view-employee',
    templateUrl: './view-employee.component.html',
    styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
    selectedPropertyId: any;
    employee: any;

    constructor(
        private dialogRef: MatDialogRef<ViewEmployeeComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private employeeService: EmployeeService,
        private snackBarService: SnackBarService,
    ) {

    }

    ngOnInit(): void {
        this.selectedPropertyId = this.data;
        this.getEmployeeById();

    }

    getEmployeeById() {
        this.employeeService.getById(this.selectedPropertyId).subscribe(response => {
            // this.employee = response.data.playList;
        }, error => {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        })
    }

    onClick(status:boolean): void {
        this.dialogRef.close(status);
    }


}
