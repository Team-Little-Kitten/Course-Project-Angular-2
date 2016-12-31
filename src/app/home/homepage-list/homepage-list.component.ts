import { Component, OnInit } from '@angular/core';

import { ILiteraryPiece } from './../../literary-pieces/literary-piece';
import { LiteraryPiecesService } from '../../literary-pieces/literary-pieces.service';

@Component({
    selector: 'homepage-list',
    templateUrl: './homepage-list.component.html',
    styleUrls: ['./homepage-list.component.css']
})

export class HomepageListComponent implements OnInit {
    public piecesByDate: ILiteraryPiece[];
    public piecesByRating: ILiteraryPiece[];
    private _pieceService: LiteraryPiecesService;

    constructor(pieceService: LiteraryPiecesService) {
        this.piecesByDate = [];
        this.piecesByRating = [];
        this._pieceService = pieceService;
    }

    public ngOnInit(): void {
        this._pieceService
            .getPiecesForHomepage()
            .subscribe(resultPieces => {
                console.log(resultPieces);
                this.piecesByDate = resultPieces.filteredPiecesByDate;
                this.piecesByRating = resultPieces.filteredPiecesByRating;
            }, error => console.log(error));
    }
}
