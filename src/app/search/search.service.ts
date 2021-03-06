import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpOptionsService } from '../common-services';

import { Constants } from './../constants/constants';

const SEARCH_URL: string = `${Constants.BASE_DOMAIN_URL}search`;

@Injectable()
export class SearchService {
    private _http: Http;
    private _httpOptionsService: HttpOptionsService;

    constructor(http: Http, httpOptionsService: HttpOptionsService) {
        this._http = http;
        this._httpOptionsService = httpOptionsService;
    }

    public getSearchResult(searchValue: string): Observable<any> {
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(SEARCH_URL, { searchValue }, options)
            .map((res: Response) => res.json());
    }
}
