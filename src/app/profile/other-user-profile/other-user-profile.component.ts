import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../common-services/user.service';
import { IUser } from '../../profile/user';
import { Response } from '@angular/http';

@Component({
    templateUrl: './other-user-profile.component.html',
    styleUrls: ['./other-user-profile.component.css']
})
export class OtherUserProfileComponent implements OnInit {
    public user: IUser;
    public isAboutVisible: boolean;
    public isSignatureVisible: boolean;

    private _route: ActivatedRoute;
    private _userService: UserService;

    constructor(route: ActivatedRoute, userService: UserService) {
        this._route = route;
        this._userService = userService;
        this.user = <IUser>{};
        this.isAboutVisible = false;
        this.isSignatureVisible = false;
    }

    public ngOnInit(): void {
        let userId: string = (<any>this._route.params)._value.id;
        this._userService
            .getUserData(userId)
            .subscribe(res => this.user = (<any>res).result, console.log);
    }

    public toggleAbout(): void {
        this.isAboutVisible = !this.isAboutVisible;
    }

    public toggleSignature(): void {
        this.isSignatureVisible = !this.isSignatureVisible;
    }
}
