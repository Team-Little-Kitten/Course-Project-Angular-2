import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ILiteraryPiece } from './../../literary-pieces/literary-piece';
import { LiteraryPiecesService } from './../../literary-pieces/literary-pieces.service';

@Component({
    templateUrl: './logged-in-user-works.component.html',
    styleUrls: ['./logged-in-user-works.component.css']
})
export class LoggedInUserWorksComponent implements OnInit {
    public pieces: ILiteraryPiece[];
    public pages: number;
    public currentPage: number;
    public pageSize: number;

    private _pageCount: number;
    private _route: ActivatedRoute;

    private _literaryPiecesService: LiteraryPiecesService;
    private _username: string;
    constructor(literaryPiecesService: LiteraryPiecesService, route: ActivatedRoute) {

        if (localStorage.getItem('user')) {
            this._username = JSON.parse(localStorage.getItem('user')).result.username
        }

        this._literaryPiecesService = literaryPiecesService;
        this._route = route;
    }

    ngOnInit() {
        this._route.params
            .subscribe(params => {
                this.currentPage = parseInt(params['page'], 10);
                this.pageSize = parseInt(params['pageSize'], 10);

                this._literaryPiecesService
                    .getPiecesByAuthorForLoggedInUser(this._username, this.currentPage, this.pageSize)
                    .subscribe(result => {
                        this.pieces = result.pieces;
                        this._pageCount = result.count;

                        this.pages = (this._pageCount / this.pageSize);
                    });
            });
    }
}
