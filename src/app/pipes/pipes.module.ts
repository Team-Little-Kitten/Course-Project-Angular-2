import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { FormatRatingPipe } from './format-rating.pipe';
import { LibrarySortPipe } from './library-sort.pipe';
import { WritersSortPipe } from './writers-sort.pipe';
import { NormalizeThreadCategoryPipe } from './normalize-thread-category.pipe';
import { ToNumberArrayPaginationPipe } from './to-number-array.pipe';

@NgModule({
    declarations: [
        FormatRatingPipe,
        LibrarySortPipe,
        WritersSortPipe,
        NormalizeThreadCategoryPipe,
        ToNumberArrayPaginationPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        BrowserModule
    ],
    exports: [
        FormatRatingPipe,
        LibrarySortPipe,
        WritersSortPipe,
        NormalizeThreadCategoryPipe,
        ToNumberArrayPaginationPipe
    ],
    providers: []
})

export class PipesModule { }
