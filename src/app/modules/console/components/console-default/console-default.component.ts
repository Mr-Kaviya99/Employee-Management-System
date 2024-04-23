import {Component, OnInit,} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";

@Component({
  selector: 'app-console-default',
  templateUrl: './console-default.component.html',
  styleUrls: ['./console-default.component.scss']
})
export class ConsoleDefaultComponent implements OnInit {

  selectedData: any;

  constructor(
      private cookieManagerService:CookieManagerService
  ) {

  }

  ngOnInit(): void {
  }

  logout() {
    this.cookieManagerService.logout();
  }
}
