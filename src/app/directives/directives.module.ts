import { NgModule } from '@angular/core';

import { ChangeBackgroundDirective } from './change-background.directive';
import { LikeButtonDirective } from './like-button.directive';
import { DislikeButtonDirective } from './dislike-button.directive';

@NgModule({
    declarations: [
        ChangeBackgroundDirective,
        LikeButtonDirective,
        DislikeButtonDirective
    ],
    imports: [
    ],
    exports: [
        ChangeBackgroundDirective,
        LikeButtonDirective,
        DislikeButtonDirective
    ],
    providers: []
})

export class DirectivesModule { }
