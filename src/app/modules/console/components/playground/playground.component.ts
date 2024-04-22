import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  expanded = false;

  constructor(

  ) {
  }

  onMouseEnter() {
    this.expanded = true;
  }

  onMouseLeave() {
    this.expanded = false;
  }

  ngOnInit(): void {
  }

  triggerNav() {
    this.expanded = !this.expanded;
  }

}
