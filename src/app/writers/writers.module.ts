import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { WritersMainComponent } from './writers-main/writers-main.component';
import { WritersAllComponent } from './writers-all/writers-all.component';
import { TopWritersComponent } from './top-writers/top-writers.component';
import { TopCritiquesComponent } from './top-critiques/top-critiques.component';

import { WritersSortPipe } from './../pipes/writers-sort.pipe';

import { WritersSharedService } from './writers-shared.service';

@NgModule({
    declarations: [
        WritersMainComponent,
        WritersAllComponent,
        TopWritersComponent,
        TopCritiquesComponent,

        WritersSortPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        BrowserModule,
    ],
    exports: [],
    providers: [ WritersSharedService ]
})

export class WritersModule { }
