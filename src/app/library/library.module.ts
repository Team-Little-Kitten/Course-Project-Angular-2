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

import { LiteraryPieceModule } from './../literary-pieces';
import { PipesModule } from './../pipes/pipes.module';

import { LibrarySharedService } from './library-shared.service';

@NgModule({
    declarations: [
        LibraryMainComponent,
        LibraryAllComponent,
        LibraryDramaComponent,
        LibraryPoetryComponent,
        LibraryStoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        BrowserModule,

        LiteraryPieceModule,
        PipesModule
    ],
    exports: [],
    providers: [LibrarySharedService]
})

export class LibraryModule { }
