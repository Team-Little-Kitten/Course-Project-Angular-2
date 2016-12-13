import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { APP_ROUTES } from './app.routes';
import { AuthModule } from './auth/auth.module';
import { HomeService } from './home/home.service';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES),
        AuthModule
    ],
    providers: [HomeService]
})
export class AppModule { }