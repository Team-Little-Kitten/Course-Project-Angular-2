import { Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOptionsService } from '../../common-services/http-options.service';
import { IThreadComment } from './thread-comment';

import { Constants } from './../../constants/constants';

const RECIPE_BY_TITLE_URL: string = `${Constants.BASE_DOMAIN_URL}forum/threads/findByTitle`;
const RECIPES_BY_CATEGORY: string = `${Constants.BASE_DOMAIN_URL}forum/threads/findByCategory`;
const POST_THREAD_URL: string = `${Constants.BASE_DOMAIN_URL}forum/threads/create`;
const ADD_COMMENT_URL: string = `${Constants.BASE_DOMAIN_URL}forum/threads/`;

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

    public postCreateThread(thread: Object): Observable<any> {
        let newThread: Object = { thread };
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(POST_THREAD_URL, newThread, options)
            .map((res: Response) => res.json());
    }

    public leaveComment(comment: IThreadComment, threadTitle: string): Observable<any> {
        let userId: string = comment.author._id;
        let url = `${ADD_COMMENT_URL}${threadTitle}/comments`;
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);

        return this._http
            .post(url, comment, options)
            .map((res: Response) => res.json());
    }
}
