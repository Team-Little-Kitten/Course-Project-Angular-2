import { Component, OnInit, HostBinding } from '@angular/core';
import { Http } from '@angular/http';
import { IUser } from './user';
import { UserService } from '../common-services';

declare let $: any;
@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    public user: IUser;

    @HostBinding('class') classes = 'profile-page';

    private _userService: UserService;

    constructor(userService: UserService) {
        this._userService = userService;
        this.user = JSON.parse(localStorage.getItem('user')).result;
        let userId = JSON.parse(localStorage.getItem('user')).result._id;
        this._userService.getUserData(userId)
            .subscribe(resultUser => {
                this.user = resultUser.result;
            });
    }

    public ngOnInit(): void {
        this._userService
            .getIsUserObjectUpdated()
            .subscribe(() => this.user = JSON.parse(localStorage.getItem('user')).result);
    }
}
