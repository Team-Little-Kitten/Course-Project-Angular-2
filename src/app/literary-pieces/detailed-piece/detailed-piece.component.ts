import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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

    public id: string;
    public title: string;
    public author: string;
    public genre: string;
    public body: string;
    public comments: any[];
    public ratings: any[];
    public isUserLoggedIn: boolean;
    public showCommentSection: boolean;
    public pieceBodyText: string = 'Enter your comment here.';
    public username: string = null;
    public storyRating: string;
    public charactersRating: string;
    public dialogueRating: string;
    public styleRating: string;
    public feelRating: string;
    public notificationOptions: Object;
    public isWriting: boolean = false;

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

        this.username = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).result.username : null;
        this.comments = [];
        this.ratings = [];
        this.showCommentSection = false;
        this.notificationOptions = { timeOut: 1500, pauseOnHover: true, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
    }

    get canUserComment(): boolean {
        let isUserLoggedIn = this._authService.isLoggedIn();
        let userCommented: boolean = false;
        for (let i = 0; i < this.comments.length; i += 1) {
            if (this.comments[i].author === this.username) {
                userCommented = true;
                break;
            }
        }
        let isUserAuthor: boolean = this.username === this.author;

        return isUserLoggedIn && !userCommented && !isUserAuthor;
    }

    get isPieceCommented() {
        return this.comments.length !== 0;
    }

    public likeButtonVisible(comment: any): boolean {
        return !comment.likedBy.includes(this.username) && this.username !== null && comment.author !== this.username;
    }

    public dislikeButtonVisible(comment: any): boolean {
        return !comment.dislikedBy.includes(this.username) && this.username !== null && comment.author !== this.username;
    }

    public likeComment(ev, comment): void {
        let commentId = comment._id;
        let commentAuthor = comment.author;
        this._pieceService
            .likeComment(this.id, commentId, this.username, commentAuthor)
            .subscribe(
                response => {
                        if (response.message.type === 'error') {
                            this._notificationService.create('Error', `${response.message.text}`, 'error');
                        } else {
                            this._notificationService.create('Comment', 'You have successfully liked comment', 'success');
                            this.comments = response.updatedComments;
                        }
                    },
                    err => console.log(err));
    }

    public dislikeComment(ev, comment): void {
        let commentId = comment._id;
        let commentAuthor = comment.author;
        this._pieceService
            .dislikeComment(this.id, commentId, this.username, commentAuthor)
            .subscribe(
                response => {
                        if (response.message.type === 'error') {
                            this._notificationService.create('Error', `${response.message.text}`, 'error');
                        } else {
                            this._notificationService.create('Comment', 'You have successfully disliked comment', 'success');
                            this.comments = response.updatedComments;
                        }
                    },
                    err => console.log(err));
    }

    public toggleCommentSection(): void {
        this.showCommentSection = !this.showCommentSection;
    }

    public keyupHandlerFunction(value: string): void {
        this.pieceBodyText = value;
        console.log('in keyupHandlerFunction');
        this.isWriting = !this.isWriting;
        console.log(this.isWriting);
    }

    public onChange(value){
        this.pieceBodyText = value;
    }

    public addComment(): void {
        if (!this.validateFormValue()) {
            this._notificationService.create('Error', `Invalid comment`, 'error');
            return;
        }
        this._pieceService
            .addComment(this.commentForm.value)
            .subscribe(
                response => {
                    if (response.message.type === 'error') {
                        this._notificationService.create('Error', `${response.message.text}`, 'error');
                    } else {
                        this._notificationService.create('Title', 'You have successfully added comment', 'success');
                        this.comments = response.updatedComments;
                        this.ratings = response.updatedRatings;
                        this.calculateAverageRatings();
                        this.toggleCommentSection();
                    }
                },
                err => console.log(err));
    };

    public ngOnInit(): void {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.id = id;
                this._pieceService.getPieceById(id)
                    .subscribe(piece => {
                        this.title = piece.title;
                        this.body = piece.body;
                        this.author = piece.author;
                        this.genre = piece.genre;
                        this.comments = piece.comments;
                        this.ratings = piece.ratings;
                        this.calculateAverageRatings();

                        this.commentForm = this._formBuilder.group({
                            id: this.id,
                            commentBody: this.pieceBodyText,
                            author: this.username,
                            pieceAuthor: this.author,
                            storyRating: this.storyRating,
                            charactersRating: this.charactersRating,
                            dialogueRating: this.dialogueRating,
                            styleRating: this.styleRating,
                            feelRating: this.feelRating
                        });
                    });
            });
    }

    private validateFormValue(): boolean {
        if (!this.storyRating ||
            !this.charactersRating ||
            !this.dialogueRating ||
            !this.styleRating ||
            !this.feelRating ||
            !this.pieceBodyText) {
                return false;
            }
        else {
            return true;
        }
    }

    private calculateAverageRatings(): void {
        this.averageStory = 0;
        this.averageCharacters = 0;
        this.averageDialogue = 0;
        this.averageStyle = 0;
        this.averageFeel = 0;

        let ratingArrayLength = this.ratings.length;
        if (ratingArrayLength) {
            for (let i = 0; i < ratingArrayLength; i += 1) {
                this.averageStory += +this.ratings[i].story;
                this.averageCharacters += +this.ratings[i].characters;
                this.averageDialogue += +this.ratings[i].dialogue;
                this.averageStyle += +this.ratings[i].style;
                this.averageFeel += +this.ratings[i].feel;
            }

            this.averageStory /= ratingArrayLength;
            this.averageCharacters /= ratingArrayLength;
            this.averageDialogue /= ratingArrayLength;
            this.averageStyle /= ratingArrayLength;
            this.averageFeel /= ratingArrayLength;
        }
    }
}
