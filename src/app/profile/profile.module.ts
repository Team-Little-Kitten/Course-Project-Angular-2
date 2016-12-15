import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdditionalInfoComponent, FriendsComponent, ProfileComponent, WorksComponent } from './';

@NgModule({
    declarations: [AdditionalInfoComponent, FriendsComponent, ProfileComponent, WorksComponent],
    imports: [RouterModule],
    exports: [],
    providers: []
})
export class ProfileModule { }