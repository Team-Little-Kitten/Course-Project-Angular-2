import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { HttpOptionsService } from '../common-services';

const REGISTER_URL: string = 'http://localhost:8080/auth/register';
const LOGIN_URL: string = 'http://localhost:8080/auth/login';
const LOGOUT_URL: string = 'http://localhost:8080/auth/logout';
const VERIFY_LOGIN_URL: string = 'http://localhost:8080/auth/verify';

@Injectable()
export class AuthService {
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

    registerUser(data: Object) {
        let userToCreate: string = JSON.stringify(data);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(REGISTER_URL, userToCreate, options)
            .map((response: Response) => response.json());
    }

    loginUser(data: Object) {
        let userToLogin: string = JSON.stringify(data);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(LOGIN_URL, userToLogin, options)
            .map((response: Response) => response.json());
    }

    logoutUser(): void {
        localStorage.clear();
    }

    isLoggedIn(): Observable<boolean> | boolean {
        let userDataString: string = localStorage.getItem('user');
        if (!userDataString) {
            return false;
        }

        let token: string = JSON.parse(userDataString).result.token;
        let options = this._httpOptionsService.getRequestOptions(true, token);

        return this._http
            .post(VERIFY_LOGIN_URL, '', options)
            .map((response: Response) => {
                let result = JSON.parse(response.text());
                if (result.success) {
                    return true;
                }

                return false;
            });
    }
}