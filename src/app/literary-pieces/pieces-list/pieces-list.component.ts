import { Component, OnInit } from '@angular/core';

import { ILiteraryPiece } from '../literary-piece';

import { LiteraryPiecesService } from '../literary-pieces.service';

@Component({
    selector: 'pieces-list',
    templateUrl: './pieces-list.component.html',
    styleUrls: ['./pieces-list.component.css']
})

// should be on init
export class PiecesListComponent {
    public pieces: ILiteraryPiece[];
    private _pieceService: LiteraryPiecesService;

    constructor(pieceService: LiteraryPiecesService) {
        this.pieces = [];
        this._pieceService = pieceService;
    }

    public ngOnInit(): void {
        this._pieceService
            .getPiecesForHomepage()
            .subscribe(resultPieces => this.pieces = resultPieces, error => console.log(error));
    }
}
