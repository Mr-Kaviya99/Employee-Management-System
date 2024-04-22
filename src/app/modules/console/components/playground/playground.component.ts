import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
// import {
//   ContactDetailsConfigComponent
// } from 'src/app/modules/share/modals/contact-details-config/contact-details-config.component';
// import {StudentService} from 'src/app/modules/share/service/student/student.service';
// import {
//   ProfilePicManagerComponent
// } from "../../../share/components/image-manager/profile-pic-manager/profile-pic-manager.component";
import {DomSanitizer} from "@angular/platform-browser";
// import {SnackBarService} from "../../../share/service/snack-bar/snack-bar.service";
// import {AuthService} from "../../../share/service/auth/auth.service";
// import {CookieManagerService} from "../../../share/service/cookie/cookie-manager.service";
// import {ImagesService} from "../../../share/service/images/images.service";
// import {LoadingService} from "../../../share/service/loading/loading.service";
// import {UserAvatarService} from "../../../share/service/user-avatar/user-avatar.service";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  selectedData: any;
  expanded = false;
  file: any;
  // @ts-ignore
  croppedImage: SafeUrl;
  // @ts-ignore
  blobData: any;
  public profileAvatar = 'data:image/png;base64,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';

  constructor(
   /* private dialog: MatDialog,
    private snackBarService: SnackBarService,
    private cookieManager: CookieManagerService,
    private studentService: StudentService,
    private authService: AuthService,
    private userAvatarService: UserAvatarService,
    private loadingService: LoadingService,
    private sanitizer: DomSanitizer,
    private imageService: ImagesService*/
  ) {
  }

  onMouseEnter() {
    this.expanded = true;
  }

  onMouseLeave() {
    this.expanded = false;
  }

  ngOnInit(): void {
    this.loadStudentsInfo();
    this.isContactAvailable();
    this.loadAvatar();
  }

  loadAvatar() {
   /* this.userAvatarService.getAvatar().subscribe(response => {
      this.profileAvatar = response.data.resourceUrl;
    });*/
  }

  loadStudentsInfo() {
   /* this.studentService.getStudentRecords().subscribe(response => {
      this.selectedData = response.data;
    });*/
  }

  triggerNav() {
    this.expanded = !this.expanded;
  }

  isContactAvailable() {

   /* this.studentService.isContactDetailsAvailable().subscribe(reponse => {
      if (!reponse.data) {
        this.dialog.open(ContactDetailsConfigComponent, {
          disableClose: true
        });
      }

    });*/


  }

  isFileSizeValid(file: File): boolean {
    const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB in bytes
    return file.size <= maxSizeInBytes;
  }

  onFileSelected(event: Event) {
    /*const fileInput = event.target as HTMLInputElement;
    this.file = fileInput.files?.[0];
    if (this.file) {
      if (this.isFileSizeValid(this.file)) {
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];
        const fileExtension = this.file.name.split('.').pop()?.toLowerCase();

        if (fileExtension && allowedExtensions.includes(fileExtension)) {
          const dialogRef = this.dialog.open(ProfilePicManagerComponent, {
            maxWidth: '500px',
            disableClose: true,
            data: {'resource': event,'fileName':this.file.name}
          });

          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(result.displayData?.changingThisBreaksApplicationSecurity);
              this.blobData = result.blobData;
              this.uploadAvatar();
            }
          });

        } else {
          this.snackBarService.openWarningSnackBar("Please select a valid file with jpg, jpeg, or png extension.", 'close');
        }

      } else {
        this.snackBarService.openWarningSnackBar('Selected file size exceeds 10 MB.', 'Close');
        // Show a warning or error message to the user indicating that the file size is too large.
      }
    }*/
  }

  uploadAvatar() {
    // if (!this.blobData) {
    //   this.snackBarService.openSuccessSnackBar('please Select a valid profile image', 'Close');
    //   return;
    // }
    // this.loadingService.mainLoader.next(true);
    //
    // this.imageService.deleteImage(this.profileAvatar);
    //
    // this.imageService.saveFile(this.blobData, 'developersstack-resource/avatars').then(response => {
    //     if (response) {
    //       this.userAvatarService.setAvatar(response).subscribe(response => {
    //           if (response.code == 201) {
    //             this.loadingService.mainLoader.next(false);
    //             this.loadAvatar()
    //           }
    //         }, error => {
    //           console.log(error);
    //           this.loadingService.mainLoader.next(false);
    //           this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    //         }
    //       )
    //     }
    //
    //   }
    // ).catch(error => {
    //   this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
    //   this.loadingService.mainLoader.next(false);
    // })
  }
}
