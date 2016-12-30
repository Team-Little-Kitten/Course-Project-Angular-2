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

    public getPiecesLength(): number {
        return this.pieces.length;
    }

     public getDramaPiecesLength(): number {
        return this.pieces.filter((piece) => {
            return piece.genre === 'drama';
        }).length;
    }

     public getPoetryPiecesLength(): number {
        return this.pieces.filter((piece) => {
            return piece.genre === 'poetry';
        }).length;
    }

     public getStoryPiecesLength(): number {
        return this.pieces.filter((piece) => {
            return piece.genre === 'story';
        }).length;
    }

    public setPieces(result): void {
        this.pieces = result;
    }
}
