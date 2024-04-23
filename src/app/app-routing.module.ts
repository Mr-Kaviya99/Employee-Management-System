import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./modules/share/guard/auth.guard";

const routes: Routes = [
    {path: '', redirectTo: '/security/login', pathMatch: 'full'},
    {path: 'share', loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule)},
    {path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)},
    {path: 'console', loadChildren: () => import('./modules/console/console.module').then(m => m.ConsoleModule), canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
