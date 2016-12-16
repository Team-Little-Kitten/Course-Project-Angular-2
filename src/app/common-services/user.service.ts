import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpOptionsService } from '../common-services';

const GET_USER_DATA_URL = 'http://localhost:8080/user/';

@Injectable()
export class UserService {
    private _http: Http;
    private _httpOptionsService: HttpOptionsService;

    constructor(http: Http, httpOptionsService: HttpOptionsService) {
        this._http = http;
        this._httpOptionsService = httpOptionsService;
    }

    getUserData(userId: string): Observable<string> {
        let url = `${GET_USER_DATA_URL}${userId}`;
        return this._http.get(url).map((response: Response) => response.json());
    }
}