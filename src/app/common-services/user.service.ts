import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpOptionsService } from '../common-services';

const USER_URL = 'http://localhost:8080/users/';
const USERS_ALL_URL = 'http://localhost:8080/users/all';

@Injectable()
export class UserService {
    private _http: Http;
    private _httpOptionsService: HttpOptionsService;
    private _isLogged: boolean;
    private _isLoggedSubject: Subject<boolean>;
    private _isUserObjectUpdated: boolean;
    private _isUserObjectUpdatedSubject: Subject<boolean>;

    constructor(http: Http, httpOptionsService: HttpOptionsService) {
        this._http = http;
        this._httpOptionsService = httpOptionsService;
        this._isLoggedSubject = new Subject<boolean>();
        this._isUserObjectUpdatedSubject = new Subject<boolean>();
        this._isUserObjectUpdated = false;
    }

    public setIsUserLogged(): void {
        this._isLogged = !!localStorage.getItem('user');
        this._isLoggedSubject.next(this._isLogged);
    }

    public getIsUserLoggedIn(): Observable<boolean> {
        return this._isLoggedSubject.asObservable();
    }

    public setIsUserObjectUpdated(): void {
        this._isUserObjectUpdated = true;
        this._isUserObjectUpdatedSubject.next(this._isUserObjectUpdated);
        this._isUserObjectUpdated = false;
    }

    public getIsUserObjectUpdated(): Observable<boolean> {
        return this._isUserObjectUpdatedSubject.asObservable();
    }

    public getUserData(userId: string): Observable<any> {
        let url = `${USER_URL}${userId}`;
        return this._http.get(url).map((response: Response) => response.json());
    }

    public getAllUsersData(): Observable<any> {
        let url = USERS_ALL_URL;
        return this._http.get(url).map((response: Response) => response.json());
    }

    public updateUserData(userId: string, updateData: Object): Observable<any> {
        let url = `${USER_URL}${userId}`;
        let requestOptions = this._httpOptionsService.getRequestOptions(true);
        let data = JSON.stringify(updateData);
        return this._http.post(url, data, requestOptions).map((response: Response) => response.json());
    }
}
