import { Component, Input } from '@angular/core';
import { ILiteraryPiece } from '../../../literary-pieces';

@Component({
    selector: 'found-literary-piece',
    templateUrl: './found-literary-piece.component.html',
    styleUrls: ['./found-literary-piece.component.css']
})
export class FoundLiteraryPieceComponent {
    @Input() public literaryPiece: ILiteraryPiece;
}
