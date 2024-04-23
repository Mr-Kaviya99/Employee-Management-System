import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpHandlerInterceptor} from "./modules/share/interceptor/http-handdle-interceptor.service";
import {ShareModule} from "./modules/share/share.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSnackBarModule,
        ShareModule
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpHandlerInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
