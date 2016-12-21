import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThreadComponent } from './thread.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { ThreadsListComponent } from './threads-list/threads-list.component';
import { ThreadsService } from './threads.service';
import { SingleThreadComponent } from './single-thread/single-thread.component';

@NgModule({
    declarations: [ThreadComponent, CreateThreadComponent, ThreadsListComponent, SingleThreadComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
    exports: [ThreadComponent, CreateThreadComponent],
    providers: [ThreadsService]
})
export class ThreadsModule { }
