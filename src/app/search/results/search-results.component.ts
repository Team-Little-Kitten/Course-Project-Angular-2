import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../';

@Component({
    templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {
    private _route: ActivatedRoute;
    private _searchService: SearchService;

    constructor(route: ActivatedRoute, searchService: SearchService) {
        this._route = route;
        this._searchService = searchService;
    }

    public ngOnInit(): void {
        let searchValue = this._route.queryParams;
        console.log(this._route.queryParams);
    }
}
