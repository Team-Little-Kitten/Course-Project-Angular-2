import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { LiteraryPieceModule } from '../literary-pieces';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        LiteraryPieceModule
    ],
    exports: [],
    providers: []
})
export class HomeModule { }
