import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';
import { SearchResultsComponent } from './results/search-results.component';
import { FoundUserComponent } from './results/found-user/found-user.component';
import { FoundLiteraryPieceComponent } from './results/found-literary-piece/found-literary-piece.component';
import { SearchService } from './search.service';
import { HttpOptionsService } from '../common-services';
import { NotificationsService, SimpleNotificationsModule } from './../../../node_modules/angular2-notifications';

@NgModule({
    declarations: [SearchComponent, SearchResultsComponent, FoundUserComponent, FoundLiteraryPieceComponent],
    exports: [SearchComponent],
    imports: [BrowserModule, HttpModule, RouterModule, SimpleNotificationsModule],
    providers: [HttpOptionsService, SearchService, SearchComponent]
})
export class SearchModule { }
