import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from './../../../../node_modules/angular2-notifications';


import { SearchService } from '../search.service';

@Component({
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
    public searchResult: any;
    public options: Object;


    private _route: ActivatedRoute;
    private _searchService: SearchService;
    private _notificationService: NotificationsService;

    constructor(route: ActivatedRoute, searchService: SearchService, notificationsService: NotificationsService) {
        this._route = route;
        this._searchService = searchService;
        this._notificationService = notificationsService;
        this.options = { timeOut: 1500, pauseOnHover: true, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
        this.searchResult = {};
    }

    public ngOnInit(): void {
        let params: any = (<any>this._route.queryParams)._value;
        let searchValue: string = params.value;
        this._searchService
            .getSearchResult(searchValue)
            .subscribe(res => {
                this.searchResult = res.result;
                console.log(res)
            });
    }
}
