import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AdditionalInfoComponent, FriendsComponent, ProfileComponent, WorksComponent } from './';

@NgModule({
    declarations: [AdditionalInfoComponent, FriendsComponent, ProfileComponent, WorksComponent],
    imports: [RouterModule, HttpModule],
    exports: [],
    providers: []
})
export class ProfileModule { }