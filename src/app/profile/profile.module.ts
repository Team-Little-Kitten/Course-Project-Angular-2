import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule, NotificationsService } from '../../../node_modules/angular2-notifications';
import { OtherUserProfileComponent } from './other-user-profile/other-user-profile.component';

import { AdditionalInfoComponent, FriendsComponent, ProfileComponent, WorksComponent, LoggedInUserWorksComponent } from './';
import { UserService } from '../common-services';
import { LiteraryPiecesService } from './../literary-pieces/literary-pieces.service';

@NgModule({
    declarations: [
        OtherUserProfileComponent,
        AdditionalInfoComponent,
        FriendsComponent,
        ProfileComponent,
        WorksComponent,
        LoggedInUserWorksComponent],
    imports: [RouterModule, HttpModule, BrowserModule, FormsModule, ReactiveFormsModule, SimpleNotificationsModule],
    exports: [],
    providers: [UserService, NotificationsService, LiteraryPiecesService]
})
export class ProfileModule { }
