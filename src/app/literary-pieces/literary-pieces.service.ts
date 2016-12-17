import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { HttpOptionsService, UserService } from './../common-services';
import { ILiteraryPiece } from './literary-piece';

const CREATE_PIECE_URL: string = 'http://localhost:8080/api/pieces/create';
const GET_PIECES_BY_AUTHOR_URL: string = 'http://localhost:8080/api/pieces/byAuthor';
const GET_PIECE_BY_ID_URL: string = 'http://localhost:8080/api/pieces/byId';

@Injectable()
export class LiteraryPiecesService {
    private _http: Http;
    private _userService: UserService;
    private _httpOptionsService: HttpOptionsService;
    private _username: string;

    constructor(http: Http, userService: UserService, httpOptionsService: HttpOptionsService) {
        this._http = http;
        this._userService = userService;
        this._httpOptionsService = httpOptionsService;
        this._username = JSON.parse(localStorage.getItem('user')).result.username;
    }

    public getAllPiecesByAuthorForLoggedInUser(): Observable<ILiteraryPiece[]> {
        let url = `${GET_PIECES_BY_AUTHOR_URL}?username=${this._username}`;
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(false);
        return this._http
            .get(url, options)
            .map((response: Response) => response.json());
    }

    public createPiece(data: Object): Observable<string> {
        let pieceToCreate: string = JSON.stringify(data);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(CREATE_PIECE_URL, pieceToCreate, options)
            .map((response: Response) => response.json());
    }

    public getPieceById(id: string):Observable<ILiteraryPiece> {
        let url = `${GET_PIECE_BY_ID_URL}?id=${id}`;
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(false);
        return this._http
            .get(url, options)
            .map((response: Response) => <ILiteraryPiece>response.json()[0]);
    }
}
