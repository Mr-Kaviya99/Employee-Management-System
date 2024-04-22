import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeneralComponent} from './general.component';
import {
    BranchManagementContextComponent
} from "./components/branch-management/branch-management-context/branch-management-context.component";
import {
    UserTypeManagementContextComponent
} from "./components/user-type-management/user-type-management-context/user-type-management-context.component";
import {
    EmployeeManagementContextComponent
} from "./components/employee-management/employee-management-context/employee-management-context.component";
import {
    SalaryManagementContextComponent
} from "./components/salary-management/salary-management-context/salary-management-context.component";

const routes: Routes = [
    {
        path: '', component: GeneralComponent, children: [
            {path: 'branch', component: BranchManagementContextComponent},
            {path: 'user-type', component: UserTypeManagementContextComponent},
            {path: 'employee', component: EmployeeManagementContextComponent},
            {path: 'salary', component: SalaryManagementContextComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneralRoutingModule {
}
