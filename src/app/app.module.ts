import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent, LoginComponent } from './auth';
import { HomeComponent } from './home/home.component';

import { APP_ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { HomeService } from './home/home.service';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        HomeComponent,
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
    providers: [AuthService, HomeService]
})
export class AppModule { }