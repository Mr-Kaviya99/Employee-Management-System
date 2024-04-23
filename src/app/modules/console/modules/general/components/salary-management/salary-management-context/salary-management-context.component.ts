import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
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

    page: number | undefined = 0;
    pageSize: number | undefined = 5;
    pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
    dataCount = 0;
    pageEvent: PageEvent | undefined;

    salaries: any;
    userTypes: any;
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    selectedMonth: any;


    form = new FormGroup({
        userType: new FormControl(null, [Validators.required]),
        month: new FormControl(null, [Validators.required]),
        amount: new FormControl(null, [Validators.required, Validators.pattern('/[-+]?[0-9]*\\.?[0-9]+/g')])
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

        this.searchForm.valueChanges
            .pipe(debounceTime(500))
            .subscribe(data => {
                // @ts-ignore
                this.selectedMonth = data.month;
            });
    }

    loadAllUserTypes() {
        this.userTypeService.allUserTypes().subscribe(response => {
            // this.userTypes = response.data.playList;
        }, error => {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        })
    }

    public getServerData(event?: PageEvent): any {
        this.pageSize = event?.pageSize;
        this.page = event?.pageIndex;
        this.getAllSalaries();
    }

    createSalaries(f: FormGroupDirective) {
        let salary = new RequestSalaryDTO(
            this.form.get('branch')?.value!,
            this.form.get('month')?.value!,
            this.form.get('amount')?.value!,
        )

        this.salaryService.newSalary(salary).subscribe(response => {
            if (response.code === 201) {
                this.snackBarService.openSuccessSnackBar('Success!', 'Close');
                this.refreshForm(f);
            }
        })
    }

    getAllSalaries() {
        this.salaryService.allSalaries().subscribe(response => {
            // this.salaries = response.data.playList;
        }, error => {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        })
    }

    private refreshForm(form: FormGroupDirective) {
        form.resetForm();
        form.reset();
    }
}

