import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ThreadsService } from './../threads.service'

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

    public pieceBodyText: string = "Magic";

    private _threadsService: ThreadsService;
    private _notificationService: NotificationsService;

    constructor(formBuilder: FormBuilder, threadsService: ThreadsService, notificationService: NotificationsService) {
        this._notificationService = notificationService;
        this._threadsService = threadsService;
        this.fb = formBuilder;
        this.username = JSON.parse(localStorage.getItem('user')).result.username;
        this.options = { timeOut: 1500, pauseOnHover: true, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
    }

    ngOnInit() {
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
                console.log(response)
                if (response.message.type === 'error') {
                    this._notificationService.error('Error', `${response.message.text}`);
                } else {
                    this._notificationService.success('success', `${response.message.text}`);
                }
            },
            err => console.log(err));
    }
}
