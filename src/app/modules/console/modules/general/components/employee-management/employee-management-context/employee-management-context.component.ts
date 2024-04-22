import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
    selector: 'app-employee-management-context',
    templateUrl: './employee-management-context.component.html',
    styleUrls: ['./employee-management-context.component.scss']
})
export class EmployeeManagementContextComponent implements OnInit {

    page: number | undefined = 0;
    pageSize: number | undefined = 5;
    pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
    dataCount = 0;
    pageEvent: PageEvent | undefined;

    employees: any;

    branch: string = '';
    userType: string = '';
    employmentState: string = '';
    employeeAvailability: string = '';

    form = new FormGroup({
        employeeName: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        mobile: new FormControl(null, [Validators.required]),
        house: new FormControl(null, [Validators.required]),
        street: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        postal: new FormControl(null, [Validators.required]),
        country: new FormControl(null, [Validators.required])
    });

    searchForm = new FormGroup({
        branch: new FormControl(''),
        userType: new FormControl(''),
        employmentState: new FormControl(''),
        employeeAvailability: new FormControl('')
    });

    ngOnInit(): void {
        this.loadAllBranches();
        this.loadAllUserTypes();

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

    loadAllBranches() {

    }

    loadAllUserTypes() {

    }

    public getServerData(event?: PageEvent): any {
        this.pageSize = event?.pageSize;
        this.page = event?.pageIndex;
        this.getAllEmployees();
    }

    createEmployee(f: FormGroupDirective) {

    }

    getAllEmployees() {
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
