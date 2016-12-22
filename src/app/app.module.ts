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
import { HttpOptionsService } from './common-services/http-options.service';

// import { TinyEditorComponent } from './shared/tiny-editor.component';

import { SharedModule } from './shared/shared.module';
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        //  TinyEditorComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES),
        HomeModule,
        AuthModule,
        ProfileModule,
        LiteraryPieceModule,
        SearchModule,
        ForumModule,
        SharedModule
    ],
    providers: [AuthService, UserService, LiteraryPiecesService, GuardIsLoggedUser, HttpOptionsService],
    // exports: [TinyEditorComponent]
})
export class AppModule { }
