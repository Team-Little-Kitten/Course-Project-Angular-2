import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    private homeService: HomeService;

    public pieces: any[];
    public tinymce: any;

    constructor(homeService: HomeService) {
        this.homeService = homeService;
    }

    ngOnInit() {
        this.homeService.getHomeData()
            .subscribe(
            pieces => this.pieces = JSON.parse(pieces._body),
            error => console.log(error)
            );
    }
}
