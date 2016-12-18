import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILiteraryPiece } from '../literary-piece';

import { LiteraryPiecesService } from '../literary-pieces.service';

@Component({
    selector: 'detailed-piece',
    templateUrl: './detailed-piece.component.html',
    styleUrls: ['./detailed-piece.component.css']
})

export class DetailedPieceComponent {
    private _id: string;
    private _title: string;
    private _author: string;
    private _genre: string;
    private _body: string;
    private _comments: string[];

    private _pieceService: LiteraryPiecesService;
    private _route: ActivatedRoute;

    constructor(pieceService: LiteraryPiecesService, route: ActivatedRoute) {
        this._pieceService = pieceService;
        this._route = route;
    }

    get title() {
        return this._title;
    }

    get body() {
        return this._body;
    }

    get author() {
        return this._author;
    }

    get genre() {
        return this._genre;
    }

    get comments() {
        return this._comments;
    }

    public ngOnInit(): void {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._id = id;
                this._pieceService.getPieceById(id)
                    .subscribe(piece => {
                        this._title = piece.title;
                        this._body = piece.body;
                        this._author = piece.author;
                        this._genre = piece.genre;
                        this._comments = piece.comments;
                    });
            });
    }
}
