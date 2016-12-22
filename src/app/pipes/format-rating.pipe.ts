import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatRatingPipe' })
export class FormatRatingPipe implements PipeTransform {
    transform(num): any {
        let res = (Math.round(num * 10 ) / 10).toFixed(1);

        return res;
    }
}
