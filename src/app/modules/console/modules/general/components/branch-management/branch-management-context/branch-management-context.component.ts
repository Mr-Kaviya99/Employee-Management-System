import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {PageEvent} from "@angular/material/paginator";
import {RequestBranchDTO} from "../../../../../../share/dto/request/RequestBranchDTO";
import {BranchService} from "../../../../../../share/services/branch/branch.service";
import {SnackBarService} from "../../../../../../share/services/snack-bar/snack-bar.service";
import {
    ConfirmToProceedComponent
} from "../../../../../../share/Widgets/pop-up/confirm-to-proceed/confirm-to-proceed.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-branch-management-context',
    templateUrl: './branch-management-context.component.html',
    styleUrls: ['./branch-management-context.component.scss']
})
export class BranchManagementContextComponent implements OnInit {

    branches: any;

    form = new FormGroup({
        branch: new FormControl(null, [Validators.required])
    });

    constructor(
        private branchService: BranchService,
        private snackBarService: SnackBarService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.getAllBranches();
    }

    createBranch(f: FormGroupDirective) {
        let branch = new RequestBranchDTO(
            this.form.get('branch')?.value!
        )

        this.branchService.newBranch(branch).subscribe(response => {
            if (response.code === 201) {
                this.snackBarService.openSuccessSnackBar('Success!', 'Close');
                this.refreshForm(f);
            }
        })

    }

    getAllBranches() {
        this.branchService.allBranches().subscribe(response => {
            this.branches = response.data;
        }, error => {
            this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
        })
    }

    deletePopUp(propertyId: any) {
        const dialogRef = this.dialog.open(ConfirmToProceedComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.branchService.deleteBranch(propertyId).subscribe(response => {
                    console.log(response)
                    if (response?.code == 204) {
                        this.snackBarService.openSuccessSnackBar('Deleted', 'Close');
                        this.getAllBranches();
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
        this.getAllBranches();
    }

}
