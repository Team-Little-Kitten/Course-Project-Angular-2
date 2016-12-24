import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    templateUrl: './writers-main.component.html',
    styleUrls: ['./writers-main.component.css']
})

export class WritersMainComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        // this.literaryService
        //     .getAllPieces(1, 10)
        //     .subscribe(result => {
        //         this.libraryService.setPieces(result);
        //     });
        }
}
