import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShareRoutingModule} from './share-routing.module';
import {ShareComponent} from './share.component';
import {ConfirmToProceedComponent} from './Widgets/pop-up/confirm-to-proceed/confirm-to-proceed.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
    declarations: [
        ShareComponent,
        ConfirmToProceedComponent
    ],
    imports: [
        CommonModule,
        ShareRoutingModule,
        MatDialogModule
    ]
})
export class ShareModule {
}
