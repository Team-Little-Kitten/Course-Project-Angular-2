import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpOptionsService, UserService } from './../common-services';

const CREATE_PIECE_URL: string = 'http://localhost:8080/api/pieces/create';

@Injectable()
export class LiteraryPiecesService {
    private _http: Http;
    private _userService: UserService;
    private _httpOptionsService: HttpOptionsService;

    constructor(http: Http, userService: UserService, httpOptionsService: HttpOptionsService) {
        this._http = http;
        this._userService = userService;
        this._httpOptionsService = httpOptionsService;
    }

    createPiece(data: Object): Observable<string> {
        let pieceToCreate: string = JSON.stringify(data);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(CREATE_PIECE_URL, pieceToCreate, options)
            .map((response: Response) => response.json());
    }
}