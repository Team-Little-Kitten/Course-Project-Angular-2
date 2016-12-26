import {
  Component, OnChanges, Input,
  trigger, state, animate, transition, style
} from '@angular/core';

@Component({
    selector : 'writing-animation',
    animations: [
        trigger('isWritingChanged', [
            state('true', style({
                backgroundColor: 'red',
            })),
            state('false', style({
                backgroundColor: 'blue',
            })),
            transition('true => false', animate(1)),
            transition('false => true', animate(1))
        ])
    ],
    template: `
    <div [@isWritingChanged]="isWriting" >
        <p>I should change my background color</p>
    </div>
    `
})
export class WritingAnimationComponent {
    @Input() isWriting: boolean;

    ngOnChanges() {
        console.log('in writing Animation');
        console.log('isWritingChanged');
    }
}
