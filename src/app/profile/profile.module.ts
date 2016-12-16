import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdditionalInfoComponent, FriendsComponent, ProfileComponent, WorksComponent } from './';
import { UserService } from '../common-services';

@NgModule({
    declarations: [AdditionalInfoComponent, FriendsComponent, ProfileComponent, WorksComponent],
    imports: [RouterModule, HttpModule, BrowserModule, FormsModule, ReactiveFormsModule],
    exports: [],
    providers: [UserService]
})
export class ProfileModule { }