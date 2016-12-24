import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toNumberPaginationArray' })
export class ToNumberArrayPaginationPipe implements PipeTransform {
    transform(value, args: string[]): any {
        let res = [];
        for (let i = 1; i <= value + 1; i++) {
            res.push(i);
        }
        return res;
    }
}
