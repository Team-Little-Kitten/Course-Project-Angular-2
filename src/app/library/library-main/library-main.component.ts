import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ILiteraryPiece } from './../../literary-pieces/literary-piece';
import { LiteraryPiecesService } from './../../literary-pieces/literary-pieces.service';
import { LibrarySharedService } from './../library-shared.service';

@Component({
    templateUrl: './library-main.component.html',
    styleUrls: ['./library-main.component.css']
})

export class LibraryMainComponent implements OnInit {
    private literaryService: LiteraryPiecesService;
    private libraryService: LibrarySharedService;

    constructor(literaryService: LiteraryPiecesService, libraryService: LibrarySharedService) {
        this.literaryService = literaryService;
        this.libraryService = libraryService;
    }

    ngOnInit() {
        this.literaryService
            .getAllPieces(1, 10)
            .subscribe(result => {
                this.libraryService.setPieces(result);
            });
        }
}
