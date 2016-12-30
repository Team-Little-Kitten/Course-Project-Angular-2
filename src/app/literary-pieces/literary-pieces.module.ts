import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule, NotificationsService } from '../../../node_modules/angular2-notifications';

import { SharedModule } from './../shared/shared.module';
import { AnimationModule } from './../animations/animation.module';
import { PipesModule } from './../pipes/pipes.module';
import { DirectivesModule } from './../directives/directives.module';

import { SinglePieceComponent } from './single-piece/single-piece.component';
import { EditPieceComponent } from './edit-piece/edit-piece.component';
import { PiecePreviewComponent } from './piece-preview/piece-preview.component';
import { LiteraryPiecesService } from './literary-pieces.service';
import { CreatePieceComponent } from './create-piece/create-piece.component';
import { DetailedPieceComponent } from './detailed-piece/detailed-piece.component';
import { LiterayPieceDetailedComponent } from './literary-piece-detailed/literary-piece-detailed.component';

import { HttpOptionsService, UserService } from '../common-services';

@NgModule({
    declarations: [
        CreatePieceComponent,
        EditPieceComponent,
        LiterayPieceDetailedComponent,
        SinglePieceComponent,
        DetailedPieceComponent,
        PiecePreviewComponent
    ],
    imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SimpleNotificationsModule,
        CommonModule,
        SharedModule,
        AnimationModule,
        PipesModule,
        DirectivesModule
    ],
    exports: [SinglePieceComponent],
    providers: [LiteraryPiecesService, NotificationsService, HttpOptionsService, UserService]
})
export class LiteraryPieceModule { }
