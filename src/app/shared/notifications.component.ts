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
    public notificationsCount: number = 0;

    private _username: string;
    private _notificationService: NotificationsService;

    constructor(notificationService: NotificationsService) {
        this._notificationService = notificationService;

        if (localStorage.getItem('user')) {
            this._username = JSON.parse(localStorage.getItem('user')).result.username;
        }
    }

    ngOnInit() {
        this.refreshNotifications();
    }

    refresh(value) {
        this.refreshNotifications();
    }

    readNotification(notificationId) {
        this._notificationService
            .postMarkNotificationAsRead(this._username, notificationId)
            .subscribe(() => { });
        setTimeout(() => {
            this.refreshNotifications()
        }, 100)
    }

    private refreshNotifications() {
        this._notificationService.getRefreshedNotificationsForUser(this._username)
            .subscribe(response => {
                this.notifications = response;
                if (this.notifications) {
                    this.notificationsCount = 0;
                    this.notifications.forEach(x => {
                        if (x.isRead === false) {
                            this.notificationsCount += 1;
                        }
                    });
                }
            },
            err => console.log(err));
    }
}