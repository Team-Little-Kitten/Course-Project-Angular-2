import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const REGISTER_URL = 'localhost:8080/auth/register';

@Injectable()
export class AuthService {
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }

    registerUser(data): Observable<Response> {
        return this._http
            .post(REGISTER_URL, data)
            .map((response: Response) => response.json());
    }
}