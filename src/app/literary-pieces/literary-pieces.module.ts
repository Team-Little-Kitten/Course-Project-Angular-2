import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule, NotificationsService } from '../../../node_modules/angular2-notifications';

import { FormatRatingPipe } from './../pipes/format-rating.pipe';

import { SharedModule } from './../shared/shared.module';
import { AnimationModule } from './../animations/animation.module';

import {
    EditPieceComponent,
    PiecePreviewComponent,
    LiteraryPiecesService,
    CreatePieceComponent,
    LiterayPieceDetailedComponent,
    SinglePieceComponent,
    DetailedPieceComponent
} from './';

import { HttpOptionsService, UserService } from '../common-services';

@NgModule({
    declarations: [
        CreatePieceComponent,
        EditPieceComponent,
        LiterayPieceDetailedComponent,
        SinglePieceComponent,
        DetailedPieceComponent,
        PiecePreviewComponent,
        FormatRatingPipe
    ],
    imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SimpleNotificationsModule,
        CommonModule,
        SharedModule,
        AnimationModule
    ],
    exports: [SinglePieceComponent],
    providers: [LiteraryPiecesService, NotificationsService, HttpOptionsService, UserService]
})
export class LiteraryPieceModule { }
