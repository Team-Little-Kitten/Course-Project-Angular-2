import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IUser } from './user';
import { UserService } from '../common-services';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    public user: IUser;

    private _userService: UserService;

    constructor(userService: UserService) {
        this._userService = userService;
        this.user = JSON.parse(localStorage.getItem('user')).result;
    }

    public ngOnInit(): void {
        this._userService
            .getIsUserObjectUpdated()
            .subscribe(() => this.user = JSON.parse(localStorage.getItem('user')).result);
    }
}
