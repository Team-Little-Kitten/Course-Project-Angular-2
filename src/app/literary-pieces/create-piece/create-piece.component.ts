import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';

import { LiteraryPiecesService } from './../literary-pieces.service';
import { TinyEditorComponent } from './../tiny-editor.component';

const MIN_TITLE_LENGHT = 10;
const MAX_TITLE_LENGHT = 35;
const MIN_SUBTITLE_LENGHT = 10;
const MAX_SUBTITLE_LENGHT = 100;

@Component({
    templateUrl: './create-piece.component.html'
})
export class CreatePieceComponent implements OnInit {
    public pieceBodyText: string = 'Write your piece here.';
    public username: string;
    public createPieceForm: FormGroup;
    public formBuilder: FormBuilder;
    public options: Object;

    private _formBuilder: FormBuilder;
    private _router: Router;
    private _notificationService: NotificationsService;
    private _pieceService: LiteraryPiecesService;

    constructor(formBuilder: FormBuilder, router: Router, notificationService: NotificationsService, pieceService: LiteraryPiecesService) {
        this._formBuilder = formBuilder;
        this._router = router;
        this._notificationService = notificationService;
        this._pieceService = pieceService;
        this.username = JSON.parse(localStorage.getItem('user')).result.username;
        this.options = { timeOut: 1500, pauseOnHover: true, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
    }

    public ngOnInit(): void {
        let titleValidator = [Validators.required, Validators.minLength(MIN_TITLE_LENGHT), Validators.maxLength(MAX_TITLE_LENGHT)];
        let subTitleValidator = [Validators.required, Validators.minLength(MIN_SUBTITLE_LENGHT), Validators.maxLength(MAX_SUBTITLE_LENGHT)];
        this.createPieceForm = this._formBuilder.group({
            title: ['Piece Title', Validators.compose(titleValidator)],
            subtitle: ['Piece Subtitle', Validators.compose(subTitleValidator)],
            pieceBody: [this.pieceBodyText, Validators.compose(titleValidator)],
            author: [this.username, Validators.required],
            genre: ['', Validators.required]
        });
    };

    public keyupHandlerFunction(value: string): void {
        this.pieceBodyText = value;
    }

    public onChange(value: string): void {
        this.pieceBodyText = value;
    }

    public createPiece(): void {
        this._pieceService
            .createPiece(this.createPieceForm.value)
            .subscribe(
            response => {
                if (response.message.type === 'error') {
                    this._notificationService.create('Error', `${response.message.text}`, 'error');
                } else {
                    this._notificationService.create('Title', 'drugo', 'success');
                    // setTimeout(() => this._router.navigateByUrl('/login'), 1500);
                }
            },
            err => console.log(err));
    };
}
