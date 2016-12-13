import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent, LoginComponent } from './auth';

import { APP_ROUTES } from './app.routes';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES)
    ]
})
export class AppModule {

}