import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { APP_ROUTES } from './app.routes';
import { HomeModule } from './home';
import { AuthModule, AuthService } from './auth';
import { ProfileModule } from './profile';
import { SearchModule } from './search';

import { UserService } from './common-services';
import { GuardIsLoggedUser } from './route-guards';

import { LiteraryPieceModule, LiteraryPiecesService } from './literary-pieces';
import { ForumModule } from './forum';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES),
        HomeModule,
        AuthModule,
        ProfileModule,
        LiteraryPieceModule,
        SearchModule,
        ForumModule
    ],
    providers: [AuthService, UserService, LiteraryPiecesService, GuardIsLoggedUser]
})
export class AppModule { }
