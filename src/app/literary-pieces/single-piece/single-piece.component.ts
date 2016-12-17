import { Component, Input } from '@angular/core';
import { ILiteraryPiece } from '../literary-piece';

@Component({
    selector: '[single-piece]',
    templateUrl: './single-piece.component.html'
})

export class SinglePieceComponent {
    @Input() piece: ILiteraryPiece;
}
