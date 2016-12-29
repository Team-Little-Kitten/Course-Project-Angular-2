import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpOptionsService } from './http-options.service';

import { Constants } from './../constants/constants';

const USER_URL = `${Constants.BASE_DOMAIN_URL}users/`;
const USERS_ALL_URL = `${Constants.BASE_DOMAIN_URL}users/all`;
const USERS_FOLLOW_URL = `${Constants.BASE_DOMAIN_URL}api/users/follow`;
const USERS_UNFOLLOW_URL = `${Constants.BASE_DOMAIN_URL}api/users/unfollow`;

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

    public followUser(currentUserUsername: string, userToFollow: string) {
        let url = `${USERS_FOLLOW_URL}`;
        let requestOptions = this._httpOptionsService.getRequestOptions(true);
        let data = JSON.stringify({ currentUserUsername, userToFollow });
        return this._http.post(url, data, requestOptions).map((response: Response) => response.json());

    }

    public unFollowUser(currentUserUsername: string, userToUnfollow: string) {
        let url = `${USERS_UNFOLLOW_URL}`;
        let requestOptions = this._httpOptionsService.getRequestOptions(true);
        let data = JSON.stringify({ currentUserUsername, userToUnfollow });
        return this._http.post(url, data, requestOptions).map((response: Response) => response.json());
    }
}
