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
    public currentPage: number = 1;
    public pageSize: number = 3;
    private _pieces: ILiteraryPiece[];

    constructor(libraryService: LibrarySharedService) {
        this.libraryService = libraryService;
    }

    get pieces(): ILiteraryPiece[] {
        return this.libraryService.getPieces();
    }

    get pages(): number {
        console.log('All the drama poetry');
        console.log(this.libraryService.getPoetryPiecesLength());
        console.log(this.libraryService.getPoetryPiecesLength() / this.pageSize);
        return this.libraryService.getPoetryPiecesLength() / this.pageSize;
    }
}
