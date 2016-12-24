import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { WritersMainComponent } from './writers-main/writers-main.component';


//import { LibrarySortPipe } from './../pipes/library-sort.pipe';

//import { LibrarySharedService } from './library-shared.service';

//import { LiteraryPieceModule } from './../literary-pieces';

@NgModule({
    declarations: [
        WritersMainComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        BrowserModule,
    ],
    exports: [],
    providers: []
})

export class WritersModule { }
