import { NgModule } from '@angular/core';

import { ChangeBackgroundDirective } from './change-background.directive';
import { LikeButtonDirective } from './like-button.directive';
import { DislikeButtonDirective } from './dislike-button.directive';
import { CritiqueRatingColorDirective } from './critique-rating-color.directive';

@NgModule({
    declarations: [
        ChangeBackgroundDirective,
        LikeButtonDirective,
        DislikeButtonDirective,
        CritiqueRatingColorDirective
    ],
    imports: [
    ],
    exports: [
        ChangeBackgroundDirective,
        LikeButtonDirective,
        DislikeButtonDirective,
        CritiqueRatingColorDirective
    ],
    providers: []
})

export class DirectivesModule { }
