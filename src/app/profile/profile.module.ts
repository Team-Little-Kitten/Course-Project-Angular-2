import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule, NotificationsService } from '../../../node_modules/angular2-notifications';

import { AdditionalInfoComponent, FriendsComponent, ProfileComponent, WorksComponent } from './';
import { UserService } from '../common-services';
import { LiteraryPiecesService } from './../literary-pieces/literary-pieces.service';

@NgModule({
    declarations: [AdditionalInfoComponent, FriendsComponent, ProfileComponent, WorksComponent],
    imports: [RouterModule, HttpModule, BrowserModule, FormsModule, ReactiveFormsModule, SimpleNotificationsModule],
    exports: [],
    providers: [UserService, NotificationsService, LiteraryPiecesService]
})
export class ProfileModule { }
