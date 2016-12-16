import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    private _homeService: HomeService;

    public pieces: any[];

    constructor(homeService: HomeService) {
        this._homeService = homeService;
    }

    ngOnInit(): void {
        this._homeService.getHomeData()
            .subscribe(
            pieces => this.pieces = JSON.parse(pieces._body),
            error => console.log(error)
            );
    }
}
