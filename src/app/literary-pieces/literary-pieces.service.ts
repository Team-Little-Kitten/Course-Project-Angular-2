import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { HttpOptionsService, UserService } from './../common-services';
import { ILiteraryPiece } from './literary-piece';

const CREATE_PIECE_URL: string = 'http://localhost:8080/api/pieces/create';
const GET_PIECES_BY_AUTHOR_URL: string = 'http://localhost:8080/api/pieces/byAuthor';
const GET_PIECE_BY_ID_URL: string = 'http://localhost:8080/api/pieces/byId';
const POST_PIECE_UPDATE: string = 'http://localhost:8080/api/pieces/update';
const GET_PIECES_FOR_HOMEPAGE_URL: string = 'http://localhost:8080/api/pieces/filtered-for-homepage';

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
        if (localStorage.getItem('user')) {
            this._username = JSON.parse(localStorage.getItem('user')).result.username;
        }
    }

    public getPiecesByAuthorForLoggedInUser(username, page, pageSize): Observable<any> {

        let url = `${GET_PIECES_BY_AUTHOR_URL}?username=${username}&page=${page}&pageSize=${pageSize}`;

        let options: RequestOptions = this._httpOptionsService.getRequestOptions(false);
        return this._http
            .get(url, options)
            .map((response: Response) => response.json());
    }

    public createPiece(data: Object, pieceImageDataUrl: string): Observable<string> {
        data.imageDataUrl = pieceImageDataUrl;
        console.log(data);
        let pieceToCreate: string = JSON.stringify(data);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(CREATE_PIECE_URL, pieceToCreate, options)
            .map((response: Response) => response.json());
    }

    public updatePiece(id: string, piece: Object, pieceImageDataUrl: string): Observable<string> {
        let url = `${POST_PIECE_UPDATE}?id=${id}`;
        piece.imageDataUrl = pieceImageDataUrl;
        let data: string = JSON.stringify(piece);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);

        console.log(data)

        return this._http
            .post(url, data, options)
            .map((response: Response) => response.json());
    }

    public getPieceById(id: string): Observable<ILiteraryPiece> {
        let url = `${GET_PIECE_BY_ID_URL}?id=${id}`;
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(false);
        return this._http
            .get(url, options)
            .map((response: Response) => <ILiteraryPiece>response.json()[0]);
    }

    public getPiecesForHomepage(): Observable<ILiteraryPiece[]> {
        return this._http
            .get(GET_PIECES_FOR_HOMEPAGE_URL)
            .map((response: Response) => response.json());
    }

    public leaveComment(data: Object): Observable<string> {
        console.log(data);
        let newComment: string = JSON.stringify(data);
        console.log(newComment);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post("", newComment, options)
            .map((response: Response) => response.json());
    }
}
