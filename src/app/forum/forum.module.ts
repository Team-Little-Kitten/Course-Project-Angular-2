import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ForumComponent } from './forum.component';
import { ThreadsModule } from './threads/threads.module';

@NgModule({
    declarations: [ForumComponent],
    imports: [RouterModule, ThreadsModule, CommonModule],
    exports: [],
    providers: []
})
export class ForumModule { }
