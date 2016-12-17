import { Component, OnInit } from '@angular/core';

import { ILiteraryPiece } from './../../literary-pieces/literary-piece';
import { LiteraryPiecesService } from './../../literary-pieces/literary-pieces.service';
@Component({
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
    public pieces: ILiteraryPiece[];

    private _literaryPiecesService: LiteraryPiecesService;

    constructor(literaryPiecesService: LiteraryPiecesService) {
        this._literaryPiecesService = literaryPiecesService;
    }


    ngOnInit() {
        this._literaryPiecesService
            .getAllPiecesByAuthorForLoggedInUser()
            .subscribe(pieces => {
                this.pieces = pieces;
            });
    }
}