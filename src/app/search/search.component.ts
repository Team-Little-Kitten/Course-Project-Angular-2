import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    public isInSearchMode: boolean;
    public isInputVisible: boolean;

    private _nativeElement: Element;
    private _router: Router;

    constructor(elementRef: ElementRef, router: Router) {
        this.isInSearchMode = false;
        this.isInputVisible = false;
        this._nativeElement = <Element>elementRef.nativeElement;
        this._router = router;
    }

    public searchBtnClick(): void {
        if (!this.isInSearchMode) {
            this.isInSearchMode = true;
            this.isInputVisible = true;
        } else {
            let searchValue: string = $('#tb-search').val();
            this._router.navigateByUrl(`/search?value=${searchValue}`);
        }
    }
}
