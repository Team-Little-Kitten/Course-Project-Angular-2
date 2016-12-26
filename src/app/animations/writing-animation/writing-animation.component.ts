import {
  Component, OnChanges, Input,
  trigger, state, animate, transition, style
} from '@angular/core';

@Component({
    selector : 'writing-animation',
    templateUrl: './writing-animation.component.html',
    styleUrls: ['./writing-animation.component.css'],
    animations: [
        trigger('animationState1', [
            state('1', style({
                opacity: 1
            })),
            state('2', style({
                opacity: 0
            })),
            state('3', style({
                opacity: 0
            })),
            state('4', style({
                opacity: 0
            })),
            state('5', style({
                opacity: 0
            })),
            transition('1 => 2', animate('25ms')),
            transition('1 => 3', animate('25ms')),
            transition('1 => 4', animate('25ms')),
            transition('1 => 5', animate('25ms')),
        ]),
        trigger('animationState2', [
            state('1', style({
                opacity: 0
            })),
            state('2', style({
                opacity: 1
            })),
            state('3', style({
                opacity: 0
            })),
            state('4', style({
                opacity: 0
            })),
            state('5', style({
                opacity: 0
            })),
            transition('2 => 1', animate('25ms')),
            transition('2 => 3', animate('25ms')),
            transition('2 => 4', animate('25ms')),
            transition('2 => 5', animate('25ms')),
        ]),
        trigger('animationState3', [
            state('1', style({
                opacity: 0
            })),
            state('2', style({
                opacity: 0
            })),
            state('3', style({
                opacity: 1
            })),
            state('4', style({
                opacity: 0
            })),
            state('5', style({
                opacity: 0
            })),
            transition('3 => 1', animate('25ms')),
            transition('3 => 2', animate('25ms')),
            transition('3 => 4', animate('25ms')),
            transition('3 => 5', animate('25ms')),
        ]),
        trigger('animationState4', [
            state('1', style({
                opacity: 0
            })),
            state('2', style({
                opacity: 0
            })),
            state('3', style({
                opacity: 0
            })),
            state('4', style({
                opacity: 1
            })),
            state('5', style({
                opacity: 0
            })),
            transition('4 => 1', animate('25ms')),
            transition('4 => 2', animate('25ms')),
            transition('4 => 3', animate('25ms')),
            transition('4 => 5', animate('25ms')),
        ]),
        trigger('animationState5', [
            state('1', style({
                opacity: 0
            })),
            state('2', style({
                opacity: 0
            })),
            state('3', style({
                opacity: 0
            })),
            state('4', style({
                opacity: 0
            })),
            state('5', style({
                opacity: 1
            })),
            transition('5 => 1', animate('25ms')),
            transition('5 => 2', animate('25ms')),
            transition('5 => 3', animate('25ms')),
            transition('5 => 4', animate('25ms')),
        ])
    ]
})
export class WritingAnimationComponent {
    @Input() animationState: string;
}
