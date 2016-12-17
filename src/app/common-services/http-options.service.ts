import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpOptionsService {
    public getRequestOptions(sendData: boolean, token?: string): RequestOptions {
        let headersObject = {};

        if (sendData) {
            headersObject['Content-Type'] = 'application/json';
        }

        if (token) {
            headersObject['Authorization'] = token;
        }

        let headers: Headers = new Headers(headersObject);
        let options: RequestOptions = new RequestOptions({ headers: headers });
        return options;
    }
}
