import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ThreadComponent } from './thread.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';

@NgModule({
    declarations: [ThreadComponent, CreateThreadComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [ThreadComponent, CreateThreadComponent],
    providers: []
})
export class ThreadsModule { }