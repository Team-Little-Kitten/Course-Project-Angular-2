import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'writersSortPipe' })
export class WritersSortPipe implements PipeTransform {
    transform(values, sortBy): any {
        if (sortBy === 'topWriters') {
            values.sort(this.compareByWriterRating);
        } else {
            values.sort(this.compareByCritiqueRating);
        }

        return values;
    }

    compareByWriterRating(a, b) {
        if (a.writerRating > b.writerRating) {
            return -1;
        }
        if (a.writerRating < b.writerRating) {
            return 1;
        }
        return 0;
    }

    compareByCritiqueRating(a, b) {
        if (a.critiqueRating > b.critiqueRating) {
            return -1;
        }
        if (a.critiqueRating < b.critiqueRating) {
            return 1;
        }
        return 0;
    }
}
