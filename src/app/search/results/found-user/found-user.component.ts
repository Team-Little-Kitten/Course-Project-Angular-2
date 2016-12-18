import { Component, Input } from '@angular/core';

import { IUser } from '../../../profile';

@Component({
    selector: 'found-user',
    templateUrl: './found-user.component.html',
    styleUrls: ['./found-user.component.css']
})
export class FoundUserComponent {
    @Input() public user: IUser;
}
