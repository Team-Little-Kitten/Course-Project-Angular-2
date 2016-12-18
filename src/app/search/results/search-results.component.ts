import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from '../search.service';

@Component({
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
    public searchResult: any;

    private _route: ActivatedRoute;
    private _searchService: SearchService;

    constructor(route: ActivatedRoute, searchService: SearchService) {
        this._route = route;
        this._searchService = searchService;
        this.searchResult = {};
    }

    public ngOnInit(): void {
        let params: any = (<any>this._route.queryParams)._value;
        let searchValue: string = params.value;
        this._searchService
            .getSearchResult(searchValue)
            .subscribe(res => this.searchResult = res.result, console.log);
    }
}
