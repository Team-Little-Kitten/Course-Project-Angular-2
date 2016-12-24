import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { LiteraryPiecesService } from './../literary-pieces/literary-pieces.service';
import { ILiteraryPiece } from './../literary-pieces/literary-piece';

@Injectable()
export class LibrarySharedService {
    private literaryService: LiteraryPiecesService;
    private pieces: ILiteraryPiece[];

    constructor(literaryService: LiteraryPiecesService) {
        this.literaryService = literaryService;
        this.pieces = [];
    }

    public getPieces(): ILiteraryPiece[] {
        return this.pieces;
    }

    public setPieces(result): void {
        this.pieces = result;
    }
}
