import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {ForumComponent} from './forum.component';
import { ThreadsModule } from './threads/threads.module';

@NgModule({
    declarations: [ForumComponent],
    imports: [RouterModule, ThreadsModule],
    exports: [],
    providers: []
})
export class ForumModule { }