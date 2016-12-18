import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchResultsComponent } from './results/search-results.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpOptionsService } from '../common-services';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [SearchComponent, SearchResultsComponent],
    exports: [SearchComponent, SearchResultsComponent],
    imports: [BrowserModule, HttpModule, RouterModule],
    providers: [HttpOptionsService]
})
export class SearchModule { }
