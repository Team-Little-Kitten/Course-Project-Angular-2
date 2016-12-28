import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { HttpOptionsService, UserService } from './../common-services';

const REFRESH_NOTIFICATION_URL = 'http://localhost:8080/api/notifications/refresh';
const MARK_NOTIFICATION_AS_READ_URL = 'http://localhost:8080/api/notifications/markAsRead';

@Injectable()
export class NotificationsService {
    private _httpOptionsService: HttpOptionsService;
    private _http: Http;

    constructor(httpOptionsService: HttpOptionsService, http: Http) {
        this._http = http;
        this._httpOptionsService = httpOptionsService;
    }

    public getRefreshedNotificationsForUser(username): Observable<any> {

        let url = `${REFRESH_NOTIFICATION_URL}?username=${username}`;

        let options: RequestOptions = this._httpOptionsService.getRequestOptions(false);
        return this._http
            .get(url, options)
            .map((response: Response) => response.json());
    }
    public postMarkNotificationAsRead(username, notificationId): Observable<any> {

        let url = `${MARK_NOTIFICATION_AS_READ_URL}?username=${username}&id=${notificationId}`;

        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .get(url, options)
            .map((response: Response) => response.json());
    }
}