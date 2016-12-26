import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'normalizeCategory' })
export class NormalizeThreadCategoryPipe implements PipeTransform {
    public transform(value: string): any {
        if (value === 'User Suggestions') return 'userSuggestions';
        if (value === 'Comment Authors') return 'commentAuthors';
        if (value === 'Lessons') return 'lessons';
        if (value === 'Write a Book Review') return 'writeABookReview';
        if (value === 'Fun') return 'fun';
    }
}
