import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { APP_ROUTES } from './app.routes';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile';

import { HomeService } from './home/home.service';
import { AuthService } from './auth/auth.service';
import { GuardIsLoggedUser } from './route-guards';

import { LiteraryPieceModule } from './literary-pieces/literary-pieces.module';
import { LiteraryPiecesService } from './literary-pieces/literary-pieces.service';


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
    providers: [HomeService, AuthService, LiteraryPiecesService, GuardIsLoggedUser]
})
export class AppModule { }