import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILiteraryPiece } from '../literary-piece';

import { LiteraryPiecesService } from '../literary-pieces.service';

@Component({
    selector: 'detailed-piece',
    templateUrl: './detailed-piece.component.html',
    styleUrls: []
})

export class DetailedPieceComponent {
    private _id: string;
    private _title: string;

    private _pieceService: LiteraryPiecesService;
    private _route: ActivatedRoute;

    constructor(pieceService: LiteraryPiecesService, route: ActivatedRoute) {
        this._pieceService = pieceService;
        this._route = route;
    }

    get title() {
        return this._title;
    }

    public ngOnInit(): void {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._id = id;
                this._pieceService.getPieceById(id)
                    .subscribe(piece => {
                        this._title = piece.title;
                    });
            });
    }
}
