import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule, NotificationsService } from '../../../node_modules/angular2-notifications';


import { TinyEditorComponent } from './tiny-editor.component';
import { TinymceEditorDirective } from './../directives/tiny-editor.directive';
import { EditPieceComponent, LiteraryPiecesService, CreatePieceComponent, LiterayPieceDetailedComponent, SinglePieceComponent, PiecesListComponent } from './';

import { HttpOptionsService, UserService } from '../common-services';

@NgModule({
    declarations: [
        CreatePieceComponent,
        EditPieceComponent,
        LiterayPieceDetailedComponent,
        SinglePieceComponent,
        PiecesListComponent,
        TinyEditorComponent
    ],
    imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SimpleNotificationsModule,
        CommonModule
    ],
    exports: [PiecesListComponent],
    providers: [LiteraryPiecesService, NotificationsService, HttpOptionsService, UserService]
})
export class LiteraryPieceModule { }
