import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { HttpOptionsService, UserService } from './../common-services';

const REFRESH_NOTIFICATION_URL = 'http://localhost:8080/api/notifications/refresh';

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
}