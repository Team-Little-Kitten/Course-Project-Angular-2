import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule, NotificationsService } from '../../../node_modules/angular2-notifications';

import { TinymceEditorDirective } from './../directives/tiny-editor.directive';

import { CreatePieceComponent } from './create-piece/create-piece.component';

import { LiteraryPiecesService } from './literary-pieces.service';


@NgModule({
    declarations: [CreatePieceComponent, TinymceEditorDirective],
    imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SimpleNotificationsModule,
        CommonModule],
    exports: [],
    providers: [LiteraryPiecesService, NotificationsService]
})

export class LiteraryPieceModule { }