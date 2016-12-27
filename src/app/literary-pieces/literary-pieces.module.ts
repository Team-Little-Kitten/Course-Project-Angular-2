import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule, NotificationsService } from '../../../node_modules/angular2-notifications';

import { FormatRatingPipe } from './../pipes/format-rating.pipe';

import { SharedModule } from './../shared/shared.module';
import { AnimationModule } from './../animations/animation.module';

import { SinglePieceComponent } from './single-piece/single-piece.component';
import { EditPieceComponent } from './edit-piece/edit-piece.component';
import { PiecePreviewComponent } from './piece-preview/piece-preview.component';
import { LiteraryPiecesService } from './literary-pieces.service';
import { CreatePieceComponent } from './create-piece/create-piece.component';
import { DetailedPieceComponent } from './detailed-piece/detailed-piece.component';
import { LiterayPieceDetailedComponent } from './literary-piece-detailed.component';

import { HttpOptionsService, UserService } from '../common-services';

console.log(SinglePieceComponent);
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
