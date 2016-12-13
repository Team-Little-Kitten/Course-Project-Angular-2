import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent, LoginComponent } from './auth';

import { APP_ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES),
        HttpModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [AuthService]
})
export class AppModule { }