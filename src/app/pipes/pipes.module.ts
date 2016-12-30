import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FormatRatingPipe } from './format-rating.pipe';
import { LibrarySortPipe } from './library-sort.pipe';
import { WritersSortPipe } from './writers-sort.pipe';
import { NormalizeThreadCategoryPipe } from './normalize-thread-category.pipe';
import { ToNumberArrayPaginationPipe } from './to-number-array.pipe';
import { PaginationPipe } from './pagination.pipe';

@NgModule({
    declarations: [
        FormatRatingPipe,
        LibrarySortPipe,
        WritersSortPipe,
        NormalizeThreadCategoryPipe,
        ToNumberArrayPaginationPipe,
        PaginationPipe
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [
        FormatRatingPipe,
        LibrarySortPipe,
        WritersSortPipe,
        NormalizeThreadCategoryPipe,
        ToNumberArrayPaginationPipe,
        PaginationPipe
    ],
    providers: []
})

export class PipesModule { }
