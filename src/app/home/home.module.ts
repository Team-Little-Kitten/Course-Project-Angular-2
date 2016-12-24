import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './homepage/homepage.component';
import { HomepageListComponent } from './homepage-list/homepage-list.component';

import { LiteraryPieceModule } from './../literary-pieces';

@NgModule({
    declarations: [
        HomeComponent,
        HomepageListComponent,
    ],
    imports: [
        CommonModule,
        LiteraryPieceModule
    ],
    exports: [],
    providers: []
})
export class HomeModule { }
