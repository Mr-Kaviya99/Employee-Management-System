import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {debounceTime} from "rxjs";
import {RequestSalaryDTO} from "../../../../../../share/dto/request/RequestSalaryDTO";
import {SnackBarService} from "../../../../../../share/services/snack-bar/snack-bar.service";
import {MatDialog} from "@angular/material/dialog";
import {SalaryService} from "../../../../../../share/services/salary/salary.service";
import {UserTypeService} from "../../../../../../share/services/user-type/user-type.service";

@Component({
    selector: 'app-salary-management-context',
    templateUrl: './salary-management-context.component.html',
    styleUrls: ['./salary-management-context.component.scss']
})
export class SalaryManagementContextComponent implements OnInit {

    salaries: any;
    userTypes: any;
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    selectedMonth: string = '';


    form = new FormGroup({
        userType: new FormControl(null, [Validators.required]),
        month: new FormControl(null, [Validators.required]),
        amount: new FormControl(null, [Validators.required])
    });

    searchForm = new FormGroup({
        month: new FormControl('')
    });


    constructor(
        private salaryService: SalaryService,
        private userTypeService: UserTypeService,
        private snackBarService: SnackBarService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.loadAllUserTypes();
        this.getAllSalaries();

        this.searchForm.valueChanges
            .pipe(debounceTime(500))
            .subscribe(data => {
                // @ts-ignore
                this.selectedMonth = data.month;
                this.getAllSalaries()
            });
    }

    loadAllUserTypes() {
        this.userTypeService.allUserTypes().subscribe(response => {
            this.userTypes = response.data;
        }, error => {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        })
    }

    createSalaries(f: FormGroupDirective) {
        const userType = this.form.get('userType')?.value!;
        let salary = new RequestSalaryDTO(
            this.form.get('month')?.value!,
            this.form.get('amount')?.value!,
        )

        this.salaryService.newSalary(salary, userType).subscribe(response => {
            if (response.code === 200) {
                this.snackBarService.openSuccessSnackBar('Success!', 'Close');
                this.refreshForm(f);
            }
        })
    }

    getAllSalaries() {
        this.salaryService.allSalaries(this.selectedMonth).subscribe(response => {
            this.salaries = response.data;
            console.log(this.salaries)
        }, error => {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        })
    }

    private refreshForm(form: FormGroupDirective) {
        form.resetForm();
        form.reset();
        this.getAllSalaries();
    }
}

