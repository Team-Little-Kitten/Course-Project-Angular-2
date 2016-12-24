import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ILiteraryPiece } from './../../literary-pieces/literary-piece';

import { LibrarySharedService } from './../library-shared.service';

@Component({
    templateUrl: './library-all.component.html',
    styleUrls: ['./../shared-styles.component.css']
})

export class LibraryAllComponent implements OnInit {
    public libraryService: LibrarySharedService;
    public pieces: ILiteraryPiece[];

    constructor(libraryService: LibrarySharedService) {
        this.libraryService = libraryService;
        this.pieces = [];
    }

    ngOnInit() {
        this.libraryService.getPieces()
            .subscribe(result => {
            this.pieces = result;
        });
    }
}
