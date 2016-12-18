import { Component, OnInit } from '@angular/core';

import { ILiteraryPiece } from '../literary-piece';

import { LiteraryPiecesService } from '../literary-pieces.service';

@Component({
    selector: 'detailed-piece',
    templateUrl: './detailed-piece.component.html',
    styleUrls: []
})

// should be on init
export class DetailedPieceComponent {
    private _pieceService: LiteraryPiecesService;
    private _title: string;


    constructor(pieceService: LiteraryPiecesService) {
        this._pieceService = pieceService;
    }

    get title() {
        return this._title;
    }

    public ngOnInit(): void {
        this._pieceService
            .getPieceById()
            .subscribe(resultPieces => {
                this._title = resultPieces.title;
            }, error => console.log(error));
    }
}
