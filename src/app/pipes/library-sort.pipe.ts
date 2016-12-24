import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'librarySortPipe' })
export class LibrarySortPipe implements PipeTransform {
    transform(values, genre): any {
        let res = [];
        for (let i = 0; i < values.length; i++) {
            if (values[i].genre === genre) {
                res.push(values[i]);
            }
        }

        console.log(res);
        return res;
    }
}
