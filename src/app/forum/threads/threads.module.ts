import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimpleNotificationsModule, NotificationsService } from './../../../../node_modules/angular2-notifications';
import { RouterModule } from '@angular/router';

import { ThreadComponent } from './thread.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { ThreadsListComponent } from './threads-list/threads-list.component';
import { ThreadsService } from './threads.service';
import { SingleThreadComponent } from './single-thread/single-thread.component';
import { NormalizeThreadCategoryPipe } from '../../pipes/normalize-thread-category.pipe';

import { SharedModule } from './../../shared/shared.module'

@NgModule({
    declarations: [ThreadComponent, CreateThreadComponent, ThreadsListComponent, SingleThreadComponent, NormalizeThreadCategoryPipe],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, SimpleNotificationsModule, RouterModule, SharedModule],
    exports: [ThreadComponent, CreateThreadComponent],
    providers: [ThreadsService, NotificationsService]
})
export class ThreadsModule { }
