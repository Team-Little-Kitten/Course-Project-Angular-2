import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryMainComponent } from './library-main/library-main.component';

import { LiteraryPieceModule } from './../literary-pieces';

@NgModule({
    declarations: [
        LibraryMainComponent
    ],
    imports: [
        CommonModule,
        LiteraryPieceModule
    ],
    exports: [],
    providers: []
})
export class LibraryModule { }
