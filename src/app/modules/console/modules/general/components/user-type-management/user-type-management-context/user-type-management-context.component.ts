import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {
    ConfirmToProceedComponent
} from "../../../../../../share/Widgets/pop-up/confirm-to-proceed/confirm-to-proceed.component";
import {SnackBarService} from "../../../../../../share/services/snack-bar/snack-bar.service";
import {UserTypeService} from "../../../../../../share/services/user-type/user-type.service";
import {MatDialog} from "@angular/material/dialog";
import {RequestUserTypeDTO} from "../../../../../../share/dto/request/RequestUserTypeDTO";

@Component({
    selector: 'app-user-type-management-context',
    templateUrl: './user-type-management-context.component.html',
    styleUrls: ['./user-type-management-context.component.scss']
})
export class UserTypeManagementContextComponent implements OnInit {

    page: number | undefined = 0;
    pageSize: number | undefined = 5;
    pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
    dataCount = 0;
    pageEvent: PageEvent | undefined;
    userTypes: any;

    form = new FormGroup({
        userType: new FormControl(null, [Validators.required])
    });

    constructor(
        private userTypeService: UserTypeService,
        private snackBarService: SnackBarService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.getAllUserTypes();
    }

    public getServerData(event?: PageEvent): any {
        this.pageSize = event?.pageSize;
        this.page = event?.pageIndex;
        this.getAllUserTypes();
    }

    createUserType(f: FormGroupDirective) {
        let userType = new RequestUserTypeDTO(
            this.form.get('userType')?.value!
        )

        this.userTypeService.newUserType(userType).subscribe(response => {
            if (response.code === 201) {
                this.snackBarService.openSuccessSnackBar('Success!', 'Close');
                this.refreshForm(f);
            }
        })
    }

    getAllUserTypes() {
        this.userTypeService.allUserTypes().subscribe(response => {
            this.userTypes = response.data;
        }, error => {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        })
    }

    deletePopUp(propertyId: any) {
        const dialogRef = this.dialog.open(ConfirmToProceedComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.userTypeService.deleteUserType(propertyId).subscribe(response => {
                    console.log(response)
                    if (response?.code == 204) {
                        this.snackBarService.openSuccessSnackBar('Deleted', 'Close');
                        this.getAllUserTypes();
                    } else {
                        this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
                    }
                }, error => {
                    this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
                })
            }
        });
    }

    private refreshForm(form: FormGroupDirective) {
        form.resetForm();
        form.reset();
        this.getAllUserTypes();
    }


}
