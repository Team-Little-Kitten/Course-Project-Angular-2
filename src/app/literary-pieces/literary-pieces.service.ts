import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const CREATE_PIECE_URL: string = 'http://localhost:8080/api/pieces/create';

@Injectable()
export class LiteraryPiecesService {
    private _http: Http;
    private _isLogged: boolean;
    private _subject: Subject<boolean>;

    constructor(http: Http) {
        this._http = http;
        this._subject = new Subject<boolean>();
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
        let options: RequestOptions = this._getRequestOptions(true);
        return this._http
            .post(CREATE_PIECE_URL, pieceToCreate, options)
            .map((response: Response) => response.json());
    }

    private _getRequestOptions(sendData: boolean): RequestOptions {
        if (sendData) {
            let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
            let options: RequestOptions = new RequestOptions({ headers: headers });
            return options;
        }
    }
}