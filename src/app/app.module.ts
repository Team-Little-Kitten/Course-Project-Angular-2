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
import { AnimationModule } from './animations';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';

import { UserService } from './common-services';
import { HttpOptionsService } from './common-services/http-options.service';
import { GuardIsLoggedUser } from './route-guards';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES, { useHash: true }),
        HomeModule,
        AuthModule,
        ProfileModule,
        LiteraryPieceModule,
        SearchModule,
        ForumModule,
        LibraryModule,
        WritersModule,
        AnimationModule,
        SharedModule,
        PipesModule,
        DirectivesModule
    ],
    exports: [
    ],
    providers: [
        AuthService,
        UserService,
        LiteraryPiecesService,
        GuardIsLoggedUser,
        HttpOptionsService,
        LibrarySharedService,
        WritersSharedService
    ]
})
export class AppModule { }
