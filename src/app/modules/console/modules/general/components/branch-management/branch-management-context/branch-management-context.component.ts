import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {PageEvent} from "@angular/material/paginator";

@Component({
    selector: 'app-branch-management-context',
    templateUrl: './branch-management-context.component.html',
    styleUrls: ['./branch-management-context.component.scss']
})
export class BranchManagementContextComponent implements OnInit {

    page: number | undefined = 0;
    pageSize: number | undefined = 5;
    pageSizeOptions = [1, 2, 5, 10, 20, 30, 50];
    dataCount = 0;
    pageEvent: PageEvent | undefined;
    branches: any;

    form = new FormGroup({
        branchName: new FormControl(null, [Validators.required])
    });

    ngOnInit(): void {
        /* this.getAllResourceAvailableLanguages();

         this.playlistCategoryControl.valueChanges.subscribe(value => {
             this.playlistCategorySearchText = value;
             this.getPlaylistCategories();
         });*/
    }

    public getServerData(event?: PageEvent): any {
        this.pageSize = event?.pageSize;
        this.page = event?.pageIndex;
        this.getAllBranches();
    }

    createBranch(f: FormGroupDirective) {

    }

    private refreshForm(form: FormGroupDirective) {
        form.resetForm();
        form.reset();
    }

    getAllBranches() {
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
}
