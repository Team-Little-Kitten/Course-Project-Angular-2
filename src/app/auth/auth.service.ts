import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpOptionsService } from '../common-services';

import { Constants } from './../constants/constants';


const REGISTER_URL: string = `${Constants.BASE_DOMAIN_URL}auth/register`;
const LOGIN_URL: string = `${Constants.BASE_DOMAIN_URL}auth/login`;
const LOGOUT_URL: string = `${Constants.BASE_DOMAIN_URL}auth/logout`;
const VERIFY_LOGIN_URL: string = `${Constants.BASE_DOMAIN_URL}auth/verify`;
const FACEBOOK_LOGIN_URL: string = `${Constants.BASE_DOMAIN_URL}auth/facebook`;

declare const CryptoJS: any;

@Injectable()
export class AuthService {
    private _http: Http;
    private _httpOptionsService: HttpOptionsService;

    constructor(http: Http, httpOptionsService: HttpOptionsService) {
        this._http = http;
        this._httpOptionsService = httpOptionsService;
    }

    public registerUser(data: any): Observable<any> {
        data.password = CryptoJS.SHA3(data.password).toString();
        let userToCreate: string = JSON.stringify(data);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(REGISTER_URL, userToCreate, options)
            .map((res: Response) => res.json());
    }

    public loginUser(data: any): Observable<any> {
        data.password = CryptoJS.SHA3(data.password).toString();
        let userToLogin: string = JSON.stringify(data);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(LOGIN_URL, userToLogin, options)
            .map((res: Response) => res.json());
    }

    public logoutUser(): void {
        localStorage.clear();
    }

    public isLoggedIn(): Observable<boolean> | boolean {
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

    public facebookLogin(): Observable<any> {
        return this._http
            .get(FACEBOOK_LOGIN_URL)
            .map((res: Response) => res.json());
    }
}
