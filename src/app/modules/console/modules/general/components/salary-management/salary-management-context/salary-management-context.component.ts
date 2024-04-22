import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {debounceTime} from "rxjs";

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


    form = new FormGroup({
        userType: new FormControl(null, [Validators.required]),
        month: new FormControl(null, [Validators.required]),
        amount: new FormControl(null, [Validators.required,Validators.pattern('/[-+]?[0-9]*\\.?[0-9]+/g')])
    });

    searchForm = new FormGroup({
        month: new FormControl('')
    });
    ngOnInit(): void {
        this.searchForm.valueChanges
            .pipe(debounceTime(500))
            .subscribe(data => {
                // @ts-ignore
                this.branch = data.branch;
                // @ts-ignore
                this.userType = data.userType;
                // @ts-ignore
                this.employmentState = data.employmentState;
                // @ts-ignore
                this.employeeAvailability = data.employeeAvailability;
            });
    }

    public getServerData(event?: PageEvent): any {
        this.pageSize = event?.pageSize;
        this.page = event?.pageIndex;
        this.getAllSalaries();
    }

    createSalaries(f: FormGroupDirective) {

    }

    getAllSalaries() {
        /*this.playlistService.getAllPlaylists(this.playlistCategoryId,'', this.page, this.pageSize).subscribe(response => {
            console.log(response)
            this.playlists = response.data.playList;
            this.dataCount = response.data.count;
        }, error => {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        })*/
    }

    deletePopUp(playListId: any) {

    }

    viewPopUp(playListId: any) {

    }

    editPopUp(playListId: any) {

    }

    private refreshForm(form: FormGroupDirective) {
        form.resetForm();
        form.reset();
    }
}

