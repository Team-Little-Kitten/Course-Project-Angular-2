import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TinyEditorComponent } from './tiny-editor.component';
import { NotificationsComponent } from './notifications.component';
import { NotificationsService } from './notifications.service';

@NgModule({
    imports: [HttpModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    declarations: [TinyEditorComponent, NotificationsComponent],
    providers: [NotificationsService],
    exports: [TinyEditorComponent, NotificationsComponent]
})
export class SharedModule { }