import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { TinyEditorComponent } from './../tiny-editor.component';
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
    public commentForm: FormGroup;
    public averageStory: number = 0;
    public averageCharacters: number = 0;
    public averageDialogue: number = 0;
    public averageStyle: number = 0;
    public averageFeel: number = 0;

    private _id: string;
    private _title: string;
    private _author: string;
    private _genre: string;
    private _body: string;
    private _comments: any[];
    private _ratings: any[];
    private _isUserLoggedIn: boolean;
    private _showCommentSection: boolean;
    private _commentBodyText: string;
    private _username: string = null;
    private _storyRating: string;
    private _charactersRating: string;
    private _dialogueRating: string;
    private _styleRating: string;
    private _feelRating: string;

    private _pieceService: LiteraryPiecesService;
    private _authService: AuthService;
    private _notificationService: NotificationsService;
    private _route: ActivatedRoute;
    private _formBuilder: FormBuilder;

    constructor (
        authService: AuthService,
        pieceService: LiteraryPiecesService,
        notificationService: NotificationsService,
        route: ActivatedRoute,
        formBuilder: FormBuilder)
    {
        this._authService = authService;
        this._pieceService = pieceService;
        this._notificationService = notificationService;
        this._route = route;
        this._formBuilder = formBuilder;

        this._username = JSON.parse(localStorage.getItem('user')).result.username;
        this._comments = [];
        this._ratings = [];
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

    get canUserComment(): boolean {
        let isUserLoggedIn = this._authService.isLoggedIn();
        let userCommented: boolean = false;
        for (let i = 0; i < this._comments.length; i += 1) {
            if (this._comments[i].author === this._username) {
                userCommented = true;
                break;
            }
        }

        return isUserLoggedIn && !userCommented;
    }

    get isPieceCommented() {
        return this._comments.length !== 0;
    }

    public toggleCommentSection(): void {
        this._showCommentSection = !this._showCommentSection;
    }

    public keyupHandlerFunction(value: string): void {
        this._commentBodyText = value;
    }

    public onChangeCommentBodyText(value: string): void {
        this._commentBodyText = value;
    }

    public onChangeStory(value: string): void {
        this._storyRating = value;
    }

    public onChangeCharacters(value: string): void {
        this._charactersRating = value;
    }

    public onChangeDialgue(value: string): void {
        this._dialogueRating = value;
    }

    public onChangeStyle(value: string): void {
        this._styleRating = value;
    }

    public onChangeFeel(value: string): void {
        this._feelRating = value;
    }
    public addComment(): void {
        this._pieceService
            .addComment(this.commentForm.value)
            .subscribe(
            response => {
                if (response.message.type === 'error') {
                    this._notificationService.create('Error', `${response.message.text}`, 'error');
                } else {
                    this._notificationService.create('Title', 'You have successfully added comment', 'success');
                    this._comments = response.updatedComments;
                    this._ratings = response.updatedRatings;
                    this.calculateAverageRatins();
                    this.toggleCommentSection();
                }
            },
            err => console.log(err));
    };

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
                        this._ratings = piece.ratings;
                        this.calculateAverageRatins();
                    });
            });

        this.commentForm = this._formBuilder.group({
            id: this._id,
            commentBody: this._commentBodyText,
            author: this._username,
            storyRating: this._storyRating,
            charactersRating: this._charactersRating,
            dialogueRating: this._dialogueRating,
            styleRating: this._styleRating,
            feelRating: this._feelRating
        });
    }

    private calculateAverageRatins(): void {
        this.averageStory = 0;
        this.averageCharacters = 0;
        this.averageDialogue = 0;
        this.averageStyle = 0;
        this.averageFeel = 0;

        let ratingArratLength = this._ratings.length;
        if (ratingArratLength) {
            for (let i = 0; i < ratingArratLength; i += 1) {
                this.averageStory += +this._ratings[i].story;
                this.averageCharacters += +this._ratings[i].characters;
                this.averageDialogue += +this._ratings[i].dialogue;
                this.averageStyle += +this._ratings[i].style;
                this.averageFeel += +this._ratings[i].feel;
            }

            this.averageStory /= ratingArratLength;
            this.averageCharacters /= ratingArratLength;
            this.averageDialogue /= ratingArratLength;
            this.averageStyle /= ratingArratLength;
            this.averageFeel /= ratingArratLength;

            this.averageStory = Math.round(this.averageStory * 10 ) / 10;
            this.averageCharacters = Math.round(this.averageCharacters * 10 ) / 10;
            this.averageDialogue = Math.round(this.averageDialogue * 10 ) / 10;
            this.averageStyle = Math.round(this.averageStyle * 10 ) / 10;
            this.averageFeel = Math.round(this.averageFeel * 10 ) / 10;
        }
    }
}
