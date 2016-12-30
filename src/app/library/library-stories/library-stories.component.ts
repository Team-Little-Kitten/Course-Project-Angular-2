import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ILiteraryPiece } from './../../literary-pieces/literary-piece';

import { LibrarySharedService } from './../library-shared.service';

@Component({
    templateUrl: './library-stories.component.html',
    styleUrls: ['./../shared-styles.component.css']
})

export class LibraryStoriesComponent {
    public libraryService: LibrarySharedService;
    public currentPage: number = 1;
    public pageSize: number = 3;
    private _pieces: ILiteraryPiece[];
    private _pageCount: number;

    constructor(libraryService: LibrarySharedService) {
        this.libraryService = libraryService;
    }

    get pieces(): ILiteraryPiece[] {
        return this.libraryService.getPieces();
    }

    get pages(): number {
        return this.libraryService.getStoryPiecesLength() / this.pageSize;
    }
}
