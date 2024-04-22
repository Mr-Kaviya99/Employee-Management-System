import {Component, HostListener, OnInit,} from '@angular/core';
// import { StudentService } from 'src/app/modules/share/service/student/student.service';
import {TimetablePopoverComponent} from "./inner-items/timetable-popover/timetable-popover.component";
import {MatDialog} from "@angular/material/dialog";
import {CookieManagerService} from "../../../share/services/cookie/cookie-manager.service";

@Component({
  selector: 'app-console-default',
  templateUrl: './console-default.component.html',
  styleUrls: ['./console-default.component.scss']
})
export class ConsoleDefaultComponent implements OnInit {
  screenWidth: number = 0;
  length = 50;
  pageSize = 3;
  pageIndex = 0;

  selectedData: any;

  constructor(/*private studentService:StudentService, */
              public dialog: MatDialog,
              private cookieService:CookieManagerService
  ) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 1024) {
      this.pageSize = 3;
    } else if (this.screenWidth > 768) {
      this.pageSize = 2;
    } else {
      this.pageSize = 1;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 1024) {
      this.pageSize = 3;
    } else if (this.screenWidth > 768) {
      this.pageSize = 2;
    } else {
      this.pageSize = 1;
    }
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    /* this.studentService.getStudentRecords().subscribe(response=>{
       this.selectedData = response.data;
     });*/
  }

  onDateSelected(date: Date): void {
    this.dialog.open(TimetablePopoverComponent, {
      panelClass: 'mat-dialog-timetable',
      width: '450px',
      data: date
    });
  }

  getItemsCount(): number[] {
    return Array(this.pageSize).fill(0).map((x, i) => i + 1);
  }

  logout() {
    this.cookieService.logout();
  }
}
