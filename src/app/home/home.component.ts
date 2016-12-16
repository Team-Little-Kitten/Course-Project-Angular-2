import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    public pieces: any[];
    public tinymce: any;

    private _homeService: HomeService;

    constructor(homeService: HomeService) {
        this._homeService = homeService;
    }

    public ngOnInit(): void {
        this._homeService
            .getHomeData()
            .subscribe(pieces => this.pieces = JSON.parse(pieces._body), error => console.log(error));
    }
}
