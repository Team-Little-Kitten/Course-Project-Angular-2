import { Component, Input } from '@angular/core';
import { ILiteraryPiece } from '../literary-piece';

@Component({
    selector: 'single-piece',
    templateUrl: './single-piece.component.html',
    styleUrls: ['./single-piece.component.css']
})
export class SinglePieceComponent {
    @Input() public piece: ILiteraryPiece;
    @Input() public pieceUrl: string;
}
