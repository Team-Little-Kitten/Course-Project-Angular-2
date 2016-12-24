import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { APP_ROUTES } from './app.routes';

import { HomeModule } from './home';
import { AuthModule, AuthService } from './auth';
import { LiteraryPieceModule, LiteraryPiecesService } from './literary-pieces';
import { ProfileModule } from './profile';
import { SearchModule } from './search';
import { ForumModule } from './forum';
import { LibraryModule, LibrarySharedService } from './library';
import { WritersModule, WritersSharedService } from './writers';

import { UserService } from './common-services';
import { HttpOptionsService } from './common-services/http-options.service';
import { GuardIsLoggedUser } from './route-guards';

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
        LibraryModule,
        WritersModule
    ],
    providers: [
        AuthService,
        UserService,
        LiteraryPiecesService,
        GuardIsLoggedUser,
        HttpOptionsService,
        LibrarySharedService,
        WritersSharedService
    ],
    // exports: [TinyEditorComponent]
})
export class AppModule { }
