import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ThreadsService } from './../threads.service';
import { Router } from '@angular/router';

import { NotificationsService } from './../../../../../node_modules/angular2-notifications';

@Component({
    templateUrl: './create-thread.component.html',
    styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {
    public createThreadForm: FormGroup;
    public fb: FormBuilder;
    public options: Object;
    public username: string;
    public pieceBodyText: string;

    private _threadsService: ThreadsService;
    private _notificationService: NotificationsService;
    private _router: Router;

    constructor(formBuilder: FormBuilder,
        threadsService: ThreadsService,
        notificationService: NotificationsService,
        router: Router) {
        this._router = router;
        this._notificationService = notificationService;
        this._threadsService = threadsService;
        this.fb = formBuilder;
        this.username = JSON.parse(localStorage.getItem('user')).result.username;
        this.options = { timeOut: 1500, pauseOnHover: true, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
        this.pieceBodyText = "";
    }

    public ngOnInit(): void {
        this.createThreadForm = this.fb.group({
            title: ['Thred title', Validators.required],
            content: ['Thread content', Validators.required],
            author: [this.username],
            category: [Validators.required]
        });
    }

    public keyupHandlerFunction(value: string): void {
        this.pieceBodyText = value;
    }

    public onChange(value: string): void {
        this.pieceBodyText = value;
    }

    public createThread(): void {
        this._threadsService
            .postCreateThread(this.createThreadForm.value)
            .subscribe(response => {
                if (response.message.type === 'error') {
                    this._notificationService.error('Error', `${response.message.text}`);
                } else {
                    this._notificationService.success('Success.', `Thread is created.`);
                    setTimeout(() => this._router.navigateByUrl('/forum'), 1500);
                }
            },
            err => console.log(err));
    }
}
