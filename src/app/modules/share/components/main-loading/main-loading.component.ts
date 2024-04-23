import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../services/loading/loading.service";

@Component({
  selector: 'app-main-loading',
  templateUrl: './main-loading.component.html',
  styleUrls: ['./main-loading.component.scss']
})
export class MainLoadingComponent implements OnInit {

  constructor(public loadingService: LoadingService) {
  }

  ngOnInit(): void {
  }

}
