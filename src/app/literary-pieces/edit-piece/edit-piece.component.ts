import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILiteraryPiece } from './../literary-piece';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';

import { LiteraryPiecesService } from './../literary-pieces.service';

const MIN_TITLE_LENGHT = 10;
const MAX_TITLE_LENGHT = 35;
const MIN_SUBTITLE_LENGHT = 10;
const MAX_SUBTITLE_LENGHT = 100;

@Component({
    templateUrl: './edit-piece.component.html',
    styleUrls: ['./edit-piece.component.css']
})
export class EditPieceComponent implements OnInit, AfterViewInit {
    public id: string;
    public options: Object;
    public username: string;
    public editPieceForm: FormGroup;
    public formBuilder: FormBuilder;

    public title: string;
    public subtitle: string;
    public pieceBodyText: string = 'Loading';
    public genre: string;

    private _route: ActivatedRoute;
    private _literaryService: LiteraryPiecesService;
    private _formBuilder: FormBuilder;
    private _router: Router;
    private _notificationService: NotificationsService;
    private _pieceService: LiteraryPiecesService;
    private _piece: ILiteraryPiece;

    constructor(formBuilder: FormBuilder, route: ActivatedRoute, literaryService: LiteraryPiecesService, router: Router, notificationService: NotificationsService, pieceService: LiteraryPiecesService) {
        this._formBuilder = formBuilder;
        this._router = router;
        this._notificationService = notificationService;
        this._pieceService = pieceService;
        this.username = JSON.parse(localStorage.getItem('user')).result.username;
        this.options = { timeOut: 1500, pauseOnHover: true, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };

        this._route = route;
        this._literaryService = literaryService;
    }


    // MB observable
    ngOnInit() {
        let titleValidator = [Validators.required, Validators.minLength(MIN_TITLE_LENGHT), Validators.maxLength(MAX_TITLE_LENGHT)];
        let subTitleValidator = [Validators.required, Validators.minLength(MIN_SUBTITLE_LENGHT), Validators.maxLength(MAX_SUBTITLE_LENGHT)];

        this.editPieceForm = this._formBuilder.group({
            title: [Validators.compose(titleValidator)],
            subtitle: [Validators.compose(subTitleValidator)],
            pieceBody: [this.pieceBodyText],
            author: [Validators.required],
            genre: []
        });
    }

    ngAfterViewInit() {
        this._route.params
            .map(params => params["id"])
            .subscribe((id) => {
                this.id = id;

                this._literaryService.getPieceById(id)
                    .subscribe(piece => {
                        this._piece = piece;

                        this.title = this._piece.title;
                        this.subtitle = this._piece.subtitle;
                        this.pieceBodyText = this._piece.body;
                        this.genre = this._piece.genre;
                    });
            });
    }

    public onChange(value: string): void {
        this.pieceBodyText = value;
    }

    public keyupHandlerFunction(value: string): void {
        this.pieceBodyText = value;
    }

    public savePiece(): void {
        this._literaryService.updatePiece(this.id, this.editPieceForm.value).subscribe(response => {
            if (response.message.type === 'error') {
                this._notificationService.error('Error', `${response.message.text}`);
            } else {
                this._notificationService.success('Success', `${response.message.text}`);
                // setTimeout(() => this._router.navigateByUrl('/login'), 1500);
            }
        },
            err => console.log(err));
    }
}
