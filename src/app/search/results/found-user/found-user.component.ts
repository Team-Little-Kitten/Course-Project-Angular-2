import { Component, Input } from '@angular/core';
import { NotificationsService } from './../../../../../node_modules/angular2-notifications';

import { UserService } from './../../../common-services/user.service';
import { IUser } from '../../../profile';

@Component({
    selector: 'found-user',
    templateUrl: './found-user.component.html',
    styleUrls: ['./found-user.component.css']
})
export class FoundUserComponent {
    @Input() public user: IUser;

    public isFollwed: boolean = false;
    public isSelf: boolean = false;

    public options: Object;

    private _userService: UserService;
    private _loggedInUser: string;
    private _notificationService: NotificationsService;

    constructor(userService: UserService, notificationsService: NotificationsService) {
        this._userService = userService;
        this._notificationService = notificationsService;
        this.options = { timeOut: 1500, pauseOnHover: true, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
        if (localStorage.getItem('user')) {
            this._loggedInUser = JSON.parse(localStorage.getItem('user')).result.username;
        }
    }

    ngOnInit() {
        if (this.user.username === this._loggedInUser) {
            this.isSelf = true;
        }
        for (let i = 0; i < this.user.usersFollowed.length; i++) {
            if (this._loggedInUser === this.user.usersFollowed[i].username) {
                this.isFollwed = true;
                break;
            }
        }
    }

    public followUser() {
        this._userService.followUser(this._loggedInUser, this.user.username).subscribe(response => {
            if (response.message.type === 'error') {
                this._notificationService.error('Error', `${response.message.text}`);
            } else {
                this._notificationService.success('Success', `${response.message.text}`);
                this.isFollwed = true;
            }
        });
    }

    public unFollowUser() {
        this._userService.unFollowUser(this._loggedInUser, this.user.username).subscribe(response => {
            if (response.message.type === 'error') {
                this._notificationService.error('Error', `${response.message.text}`);
            } else {
                this._notificationService.success('Success', `${response.message.text}`);
                this.isFollwed = false;
            }
        });
    }
}
