import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule, NotificationsService } from '../../../node_modules/angular2-notifications';
import { OtherUserProfileComponent } from './other-user-profile/other-user-profile.component';

import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { ProfileComponent } from './profile.component';
import { WorksComponent } from './works/works.component';
import { LoggedInUserWorksComponent } from './works/logged-in-user-works.component';

import { PipesModule } from './../pipes/pipes.module';

import { UserService } from '../common-services';
import { LiteraryPiecesService } from './../literary-pieces/literary-pieces.service';

@NgModule({
    declarations: [
        OtherUserProfileComponent,
        AdditionalInfoComponent,
        ProfileComponent,
        WorksComponent,
        LoggedInUserWorksComponent
    ],
    imports: [
        RouterModule,
        HttpModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SimpleNotificationsModule,

        PipesModule
    ],
    exports: [],
    providers: [UserService, NotificationsService, LiteraryPiecesService]
})
export class ProfileModule { }
