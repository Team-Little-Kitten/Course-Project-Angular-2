import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { ThreadsService } from '../threads.service';
import { IThread } from '../thread';

@Component({
    templateUrl: './threads-list.component.html',
    styleUrls: ['./threads-list.component.css']
})
export class ThreadsListComponent implements OnInit {
    public threads: IThread[];
    public categoryName: string;

    private _route: ActivatedRoute;
    private _threadsService: ThreadsService;

    constructor(route: ActivatedRoute, threadsService: ThreadsService) {
        this._route = route;
        this._threadsService = threadsService;
        this.threads = [];
        this.categoryName = '';
    }

    public ngOnInit(): void {
        let categoryName: string = (<any>this._route.params)._value.categoryName;
        this.categoryName = this._getCategoryName(categoryName);
        this._threadsService
            .getThreadsByCategory(categoryName)
            .subscribe((res: Response) => {
                this.threads = <IThread[]>(<any>res).result;
                console.log(this.threads);
            });
    }

    private _getCategoryName(category: string): string {
        if (category === 'userSuggestions') return 'User Suggestions';
        if (category === 'commentAuthors') return 'Comment Authors';
        if (category === 'lessons') return 'Lessons';
        if (category === 'writeABookPreview') return 'Write a Book Review';
        if (category === 'fun') return 'Fun';
    }
}
