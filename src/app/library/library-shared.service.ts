import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { LiteraryPiecesService } from './../literary-pieces/literary-pieces.service';
import { ILiteraryPiece } from './../literary-pieces/literary-piece';

@Injectable()
export class LibrarySharedService {
    private literaryService: LiteraryPiecesService;
    private pieces: ILiteraryPiece[];
    private piecesSubject: Subject<ILiteraryPiece[]>;

    constructor(literaryService: LiteraryPiecesService) {
        this.literaryService = literaryService;
        this.pieces = [];
        this.piecesSubject = new Subject<ILiteraryPiece[]>();
    }

    public getPieces(): Observable<ILiteraryPiece[]> {
        return this.piecesSubject;
    }

    public setPieces(result): void {
        this.piecesSubject.next(result);
    }
}
