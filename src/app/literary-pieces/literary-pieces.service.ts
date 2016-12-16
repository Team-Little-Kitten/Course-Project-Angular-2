import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { HttpOptionsService, UserService } from './../common-services';

const CREATE_PIECE_URL: string = 'http://localhost:8080/api/pieces/create';

@Injectable()
export class LiteraryPiecesService {
    private _http: Http;
    private _isLogged: boolean;
    private _subject: Subject<boolean>;
    private _userService: UserService;
    private _httpOptionsService: HttpOptionsService;

    constructor(http: Http, userService: UserService, httpOptionsService: HttpOptionsService) {
        this._http = http;
        this._subject = new Subject<boolean>();

        this._userService = userService;
        this._httpOptionsService = httpOptionsService;
    }

    setIsUserLogged(): void {
        this._isLogged = !!localStorage.getItem('user');
        this._subject.next(this._isLogged);
    }

    getIsUserLoggedIn(): Observable<boolean> {
        return this._subject.asObservable();
    }

    createPiece(data: Object) {
        let pieceToCreate: string = JSON.stringify(data);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(CREATE_PIECE_URL, pieceToCreate, options)
            .map((response: Response) => response.json());
    }
}