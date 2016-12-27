import {
    Component,
    OnDestroy,
    AfterViewInit,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

import { NotificationsService } from './notifications.service';

@Component({
    selector: 'notifications',
    templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit {
    public notifications: any[];

    private _username: string;
    private _notificationService: NotificationsService;

    constructor(notificationService: NotificationsService) {
        this._notificationService = notificationService;

        if (localStorage.getItem('user')) {
            this._username = JSON.parse(localStorage.getItem('user')).result.username;
        }
    }

    ngOnInit() {
        this._notificationService.getRefreshedNotificationsForUser(this._username)
            .subscribe(response => {
                this.notifications = response;
                console.log(this.notifications);
            },
            err => console.log(err));
    }

    refresh(value) {
        this._notificationService.getRefreshedNotificationsForUser(this._username)
            .subscribe(response => {
                this.notifications = response;
                console.log(this.notifications);
            },
            err => console.log(err));
    }
}