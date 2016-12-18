import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LiteraryPiecesService } from './literary-pieces.service';
import { ILiteraryPiece } from './literary-piece';

@Component({
    templateUrl: './literary-piece-detailed.component.html'
})
export class LiterayPieceDetailedComponent {
    public id: string;
    public title: string;
    public subtitle: string;
    public pieceBody: string;
    public genre: string;

    private _route: ActivatedRoute;
    private _literaryService: LiteraryPiecesService;
    private _piece: ILiteraryPiece;

    constructor(route: ActivatedRoute, literaryService: LiteraryPiecesService) {
        this._route = route;
        this._literaryService = literaryService;
    }

    // MB observable
    public ngOnInit(): void {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.id = id;
                this._literaryService.getPieceById(id)
                    .subscribe(piece => {
                        this._piece = piece;
                        this.title = this._piece.title;
                        this.subtitle = this._piece.subtitle;
                        this.pieceBody = this._piece.body;
                        this.genre = this._piece.genre;
                    });
            });
    }
}
