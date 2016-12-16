import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AdditionalInfoComponent, FriendsComponent, ProfileComponent, WorksComponent } from './';

@NgModule({
    declarations: [AdditionalInfoComponent, FriendsComponent, ProfileComponent, WorksComponent],
    imports: [RouterModule, HttpModule, BrowserModule],
    exports: [],
    providers: []
})
export class ProfileModule { }