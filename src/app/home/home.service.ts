import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable, ObservableInput } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
class HomeService {
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }

    public getHomeData(): Observable<any> {
        return this._http.get('http://localhost:8080/api/pieces/all')
            .map((response: Response) => response)
            .catch(this.handleError);
    }

    private handleError(error: Response): ObservableInput<string> {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

export { HomeService }
