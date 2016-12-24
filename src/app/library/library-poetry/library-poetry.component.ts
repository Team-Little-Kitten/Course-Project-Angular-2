import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ILiteraryPiece } from './../../literary-pieces/literary-piece';

import { LibrarySharedService } from './../library-shared.service';

@Component({
    templateUrl: './library-poetry.component.html',
    styleUrls: ['./../shared-styles.component.css']
})

export class LibraryPoetryComponent {
    public libraryService: LibrarySharedService;
    private _pieces: ILiteraryPiece[];

    constructor(libraryService: LibrarySharedService) {
        this.libraryService = libraryService;
    }

    get pieces(): ILiteraryPiece[] {
        return this.libraryService.getPieces();
    }
}