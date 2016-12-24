import { Injectable } from '@angular/core';
import { ILiteraryPiece } from './../literary-pieces/literary-piece';

@Injectable()
export class LibrarySharedService {
    private pieces: ILiteraryPiece[];

    constructor() {
        this.pieces = [];
    }

    public getPieces(): ILiteraryPiece[] {
        return this.pieces;
    }

    public setPieces(result): void {
        this.pieces = result;
    }
}
