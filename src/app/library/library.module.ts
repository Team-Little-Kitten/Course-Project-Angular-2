import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { LibraryMainComponent } from './library-main/library-main.component';
import { LibraryAllComponent } from './library-all/library-all.component';
import { LibraryDramaComponent } from './library-drama/library-drama.component';
import { LibraryPoetryComponent } from './library-poetry/library-poetry.component';
import { LibraryStoriesComponent } from './library-stories/library-stories.component';

import { LibrarySortPipe } from './../pipes/library-sort.pipe';

import { LibrarySharedService } from './library-shared.service';

import { LiteraryPieceModule } from './../literary-pieces';

@NgModule({
    declarations: [
        LibraryMainComponent,
        LibraryAllComponent,
        LibraryDramaComponent,
        LibraryPoetryComponent,
        LibraryStoriesComponent,
        LibrarySortPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        BrowserModule,

        LiteraryPieceModule,
    ],
    exports: [],
    providers: [LibrarySharedService]
})

export class LibraryModule { }
