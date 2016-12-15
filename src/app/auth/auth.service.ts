import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const REGISTER_URL: string = 'http://localhost:8080/auth/register';
const LOGIN_URL: string = 'http://localhost:8080/auth/login';
const LOGOUT_URL: string = 'http://localhost:8080/auth/logout';
const VERIFY_LOGIN_URL: string = 'http://localhost:8080/auth/verifyLogin';

@Injectable()
export class AuthService {
    private _http: Http;
    private _isLogged: boolean;
    private _subject: Subject<boolean>;

    constructor(http: Http) {
        this._http = http;
        this._subject = new Subject<boolean>();
    }

    setIsUserLogged(): void {
        this._isLogged = !!localStorage.getItem('user');
        this._subject.next(this._isLogged);
    }

    getIsUserLoggedIn(): Observable<boolean> {
        return this._subject.asObservable();
    }

    registerUser(data: Object) {
        let userToCreate: string = JSON.stringify(data);
        let options: RequestOptions = this._getRequestOptions(true);
        return this._http
            .post(REGISTER_URL, userToCreate, options)
            .map((response: Response) => response.json());
    }

    loginUser(data: Object) {
        let userToLogin: string = JSON.stringify(data);
        let options: RequestOptions = this._getRequestOptions(true);
        return this._http
            .post(LOGIN_URL, userToLogin, options)
            .map((response: Response) => response.json());
    }

    logoutUser() {
        return this._http
            .post(LOGOUT_URL, '');
    }

    isLoggedIn() {
        let userDataString = localStorage.getItem('user');
        if (!userDataString) {
            return false;
        }

        return true;
    }

    private _getRequestOptions(sendData: boolean): RequestOptions {
        if (sendData) {
            let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
            let options: RequestOptions = new RequestOptions({ headers: headers });
            return options;
        }
    }
}