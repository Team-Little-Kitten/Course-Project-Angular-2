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
const GET_ALL_PIECES_URL: string = 'http://localhost:8080/api/pieces/all';
const ADD_COMMENT_URL: string = 'http://localhost:8080/api/pieces/add-comment';
const LIKE_COMMENT_URL: string = 'http://localhost:8080/api/pieces/like-comment';
const DISLIKE_COMMENT_URL: string = 'http://localhost:8080/api/pieces/dislike-comment';

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

    public getAllPieces(page, pageSize): Observable<any> {
        let url = `${GET_ALL_PIECES_URL}?page=${page}&pageSize=${pageSize}`;

        let options: RequestOptions = this._httpOptionsService.getRequestOptions(false);
        return this._http
            .get(url, options)
            .map((response: Response) => response.json());
    }

    public getPiecesByAuthorForLoggedInUser(username, page, pageSize): Observable<any> {

        let url = `${GET_PIECES_BY_AUTHOR_URL}?username=${username}&page=${page}&pageSize=${pageSize}`;

        let options: RequestOptions = this._httpOptionsService.getRequestOptions(false);
        return this._http
            .get(url, options)
            .map((response: Response) => response.json());
    }

    public createPiece(data: any, pieceImageDataUrl: string): Observable<string> {
        data.imageDataUrl = pieceImageDataUrl;
        console.log(data);
        let pieceToCreate: string = JSON.stringify(data);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(CREATE_PIECE_URL, pieceToCreate, options)
            .map((response: Response) => response.json());
    }

    public updatePiece(id: string, piece: any, pieceImageDataUrl: string): Observable<string> {
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

    public getPiecesForHomepage(): Observable<any> {
        return this._http
            .get(GET_PIECES_FOR_HOMEPAGE_URL)
            .map((response: Response) => response.json());
    }

    public addComment(data: Object): Observable<any> {
        let newComment: string = JSON.stringify(data);
        console.log(newComment);
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(ADD_COMMENT_URL, newComment, options)
            .map((response: Response) => response.json());
    }

    public likeComment(pieceId: string, commentId: string, currentUser: string, commentAuthor: string): Observable<any> {
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(LIKE_COMMENT_URL, { pieceId, commentId, currentUser, commentAuthor }, options)
            .map((response: Response) => response.json());
    }

    public dislikeComment(pieceId: string, commentId: string, currentUser: string, commentAuthor: string): Observable<any> {
        let options: RequestOptions = this._httpOptionsService.getRequestOptions(true);
        return this._http
            .post(DISLIKE_COMMENT_URL, { pieceId, commentId, currentUser, commentAuthor }, options)
            .map((response: Response) => response.json());
    }
}
