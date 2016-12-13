import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
class HomeService {
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    getHomeData(): Observable<any> {
        return this.http.get('http://localhost:8080/')
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

export { HomeService }
