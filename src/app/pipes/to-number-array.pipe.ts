import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toNumberPaginationArray' })
export class ToNumberArrayPaginationPipe implements PipeTransform {
    transform(value, args: string[]): any {
        value = Math.ceil(value);
        let res = [];
        for (let i = 1; i <= value; i++) {
            res.push(i);
        }
        return res;
    }
}
