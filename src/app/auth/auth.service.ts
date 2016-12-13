import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const REGISTER_URL = 'http://localhost:8080/auth/register';

@Injectable()
export class AuthService {
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }

    registerUser(data) {
        let userToCreate = JSON.stringify(data);
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        let options: RequestOptions = new RequestOptions({ headers: headers });

        return this._http
            .post(REGISTER_URL, userToCreate, options)
            .map((response: Response) => response.json());
    }
}