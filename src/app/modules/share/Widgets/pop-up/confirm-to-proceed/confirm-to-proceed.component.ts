import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-to-proceed',
  templateUrl: './confirm-to-proceed.component.html',
  styleUrls: ['./confirm-to-proceed.component.scss']
})
export class ConfirmToProceedComponent {

  constructor(
      public dialogRef: MatDialogRef<ConfirmToProceedComponent>
  ) {
  }

  onClick(status:boolean): void {
    this.dialogRef.close(status);
  }

}
