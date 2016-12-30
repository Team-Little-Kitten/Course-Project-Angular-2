import { Component, Input, trigger, state, animate, transition, style } from '@angular/core';
import { ILiteraryPiece } from '../literary-piece';

@Component({
    selector: 'single-piece',
    templateUrl: './single-piece.component.html',
    styleUrls: ['./single-piece.component.css'],
    animations: [
    trigger('slide', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
            style({transform: 'translateX(-100%)'}),
            animate(200)
            ]),
            transition('* => void', [
            animate(200, style({transform: 'translateX(100%)'}))
            ])
        ])
    ]
})
export class SinglePieceComponent {
    @Input() public piece: ILiteraryPiece;
    @Input() public pieceUrl: string;
}
