import { Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpOptionsService } from '../../common-services/http-options.service';

const RECIPE_BY_TITLE_URL: string = 'http://localhost:8080/forum/threads/findByTitle';
const RECIPES_BY_CATEGORY: string = 'http://localhost:8080/forum/threads/findByCategory';

@Injectable()
export class ThreadsService {
    private _http: Http;
    private _httpOptionsService: HttpOptionsService;

    constructor(http: Http, httpOptionsService: HttpOptionsService) {
        this._http = http;
        this._httpOptionsService = httpOptionsService;
    }

    public getThreadByTitle(threadTitle: string): Observable<any> {
        let title: Object = { title: threadTitle };
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(RECIPE_BY_TITLE_URL, title, options)
            .map((res: Response) => res.json());
    }

    public getThreadsByCategory(categoryName: string): Observable<any> {
        let category: Object = { category: { categoryName } };
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(RECIPES_BY_CATEGORY, category, options)
            .map((res: Response) => res.json());
    }
}
