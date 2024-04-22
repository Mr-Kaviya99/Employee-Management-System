import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import {PlaygroundComponent} from "./components/playground/playground.component";
import {ConsoleDefaultComponent} from "./components/console-default/console-default.component";
import {MatIconModule} from "@angular/material/icon";
import {ConsoleBodyComponent} from "./components/console-body/console-body.component";


@NgModule({
  declarations: [
    ConsoleComponent,
    PlaygroundComponent,
    ConsoleBodyComponent,
    ConsoleDefaultComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    MatIconModule,
  ]
})
export class ConsoleModule { }
