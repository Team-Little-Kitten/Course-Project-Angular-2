import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'paginationPipe' })
export class PaginationPipe implements PipeTransform {
    transform(values, page, pageSize): any {
        let res = [];

        res = values.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);

        console.log(res);
        return res;
    }
}
