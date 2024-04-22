import {Component, OnInit,} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-console-default',
  templateUrl: './console-default.component.html',
  styleUrls: ['./console-default.component.scss']
})
export class ConsoleDefaultComponent implements OnInit {

  selectedData: any;

  constructor(
  ) {

  }

  ngOnInit(): void {
  }

  logout() {
  }
}
