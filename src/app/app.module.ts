import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { APP_ROUTES } from './app.routes';
import { AuthModule, AuthService } from './auth';
import { ProfileModule } from './profile';

import { HomeService } from './home/home.service';
import { UserService } from './common-services';
import { GuardIsLoggedUser } from './route-guards';

import { LiteraryPieceModule, LiteraryPiecesService } from './literary-pieces';


@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES),
        AuthModule,
        ProfileModule,
        LiteraryPieceModule
    ],
    providers: [HomeService, AuthService, UserService, LiteraryPiecesService, GuardIsLoggedUser]
})
export class AppModule { }