import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

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
    userTypeName: new FormControl(null, [Validators.required])
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
    this.getAllUserTypes();
  }

  createUserType(f: FormGroupDirective) {

  }

  private refreshForm(form: FormGroupDirective) {
    form.resetForm();
    form.reset();
  }

  getAllUserTypes() {
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
