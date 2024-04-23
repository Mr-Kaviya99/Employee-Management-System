import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsoleComponent} from './console.component';
import {PlaygroundComponent} from "./components/playground/playground.component";
import {ConsoleDefaultComponent} from "./components/console-default/console-default.component";

const routes: Routes = [
  {
    path: '', component: ConsoleComponent, children: [
      {path: '', redirectTo: '/console/playground/home', pathMatch: 'full'},
      {
        path: 'playground', component: PlaygroundComponent, children: [
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          {path: 'home', component: ConsoleDefaultComponent},
          {path: 'general', loadChildren: () => import('./modules/general/general.module').then(m => m.GeneralModule)}
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule {
}
