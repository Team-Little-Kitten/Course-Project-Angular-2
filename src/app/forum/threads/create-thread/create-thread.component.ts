import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './create-thread.component.html',
    styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {
    public createThreadForm: FormGroup;
    public fb: FormBuilder;
    public options: Object;
    public username: string;

    constructor(formBuilder: FormBuilder) {
        this.fb = formBuilder;
        this.username = JSON.parse(localStorage.getItem('user')).result.username;
        this.options = { timeOut: 1500, pauseOnHover: true, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
    }

    ngOnInit() {
        this.createThreadForm = this.fb.group({
            title: ['Thred title', Validators.required],
            content: ['Thread content', Validators.required],
            author: [this.username]
        });
    }

    public createThread(): void {
        console.log(this.createThreadForm.value);
    }
}