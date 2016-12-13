import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const REGISTER_URL: string = 'http://localhost:8080/auth/register';
const LOGIN_URL: string = 'http://localhost:8080/auth/login';

@Injectable()
export class AuthService {
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
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

    private _getRequestOptions(sendData: boolean): RequestOptions {
        if (sendData) {
            let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
            let options: RequestOptions = new RequestOptions({ headers: headers });
            return options;
        }
    }
}