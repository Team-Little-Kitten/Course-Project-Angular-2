import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreadsService } from '../threads.service';

@Component({
    templateUrl: './single-thread.component.html',
    styleUrls: ['./single-thread.component.css']
})
export class SingleThreadComponent implements OnInit {
    public thread: any;

    private _route: ActivatedRoute;
    private _threadsService: ThreadsService;

    constructor(route: ActivatedRoute, threadsService: ThreadsService) {
        this._route = route;
        this._threadsService = threadsService;
        this.thread = { author: {} };
    }

    ngOnInit(): void {
        let threadTitle: string = (<any>this._route.params)._value.threadTitle;
        this._threadsService
            .getThreadByTitle(threadTitle)
            .subscribe((res: any) => {
                this.thread = res.thread;
                console.log(this.thread);
            }, console.log);
    }
}
