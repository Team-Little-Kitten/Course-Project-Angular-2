import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpOptionsService } from '../common-services';

const USER_URL = 'http://localhost:8080/users/';

@Injectable()
export class UserService {
    private _http: Http;
    private _httpOptionsService: HttpOptionsService;
    private _isLogged: boolean;
    private _subject: Subject<boolean>;

    constructor(http: Http, httpOptionsService: HttpOptionsService) {
        this._http = http;
        this._httpOptionsService = httpOptionsService;
        this._subject = new Subject<boolean>();
    }

    setIsUserLogged(): void {
        this._isLogged = !!localStorage.getItem('user');
        this._subject.next(this._isLogged);
    }

    getIsUserLoggedIn(): Observable<boolean> {
        return this._subject.asObservable();
    }

    getUserData(userId: string): Observable<string> {
        let url = `${USER_URL}${userId}`;
        return this._http.get(url).map((response: Response) => response.json());
    }

    updateUserDate(userId: string, updateData: Object): Observable<string> {
        let url = `${USER_URL}${userId}`;
        let requestOptions = this._httpOptionsService.getRequestOptions(true);
        let data = JSON.stringify(updateData);
        return this._http.post(url, data, requestOptions).map((response: Response) => response.json());
    }
}