import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILiteraryPiece } from '../literary-piece';

import { LiteraryPiecesService } from '../literary-pieces.service';
import { AuthService } from '../../auth/auth.service';

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
    private _isUserLoggedIn: boolean;

    private _pieceService: LiteraryPiecesService;
    private _authService: AuthService;
    private _route: ActivatedRoute;

    constructor(authService: AuthService, pieceService: LiteraryPiecesService, route: ActivatedRoute) {
        this._authService = authService;
        this._pieceService = pieceService;
        this._route = route;

        this._comments = [];
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

    get isUserLoggedIn() {
        return this._authService.isLoggedIn();
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
