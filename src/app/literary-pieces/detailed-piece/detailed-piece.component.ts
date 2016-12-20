import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ILiteraryPiece } from '../literary-piece';
import { LiteraryPiecesService } from '../literary-pieces.service';
import { AuthService } from '../../auth/auth.service';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';

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
    private _showCommentSection: boolean;

    private _pieceService: LiteraryPiecesService;
    private _authService: AuthService;
    private _notificationService: NotificationsService;
    private _route: ActivatedRoute;

    constructor(
        authService: AuthService,
        pieceService: LiteraryPiecesService,
        notificationService: NotificationsService,
        route: ActivatedRoute)
    {
        this._authService = authService;
        this._pieceService = pieceService;
        this._notificationService = notificationService;
        this._route = route;

        this._comments = [];
        this._showCommentSection = false;
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

    get showCommentSection() {
        return this._showCommentSection;
    }

    get isUserLoggedIn() {
        return this._authService.isLoggedIn();
    }

    get isPieceCommented() {
        return this._comments.length !== 0;
    }

    public toggleCommentSection(): void {
        this._showCommentSection = !this._showCommentSection;
    }

    // public leaveComment(): void {
    //     this._pieceService
    //         .leaveComment(""// add value)
    //         .subscribe(
    //         response => {
    //             if (response.message.type === 'error') {
    //                 this._notificationService.create('Error', `${response.message.text}`, 'error');
    //             } else {
    //                 this._notificationService.create('Title', 'You have successfully added comment', 'success');
    //                 // setTimeout(() => this._router.navigateByUrl('/login'), 1500);
    //             }
    //         },
    //         err => console.log(err)));
    // };

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
