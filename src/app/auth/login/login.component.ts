import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['../auth.common.css']
})
export class LoginComponent implements OnInit {
    public form: FormGroup;
    public fb: FormBuilder;
    public authService: AuthService;

    constructor(fb: FormBuilder, authService: AuthService) {
        this.fb = fb;
        this.authService = authService;
    }

    ngOnInit() {
        this.form = this.fb.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    login() {
        this.authService
            .loginUser(this.form.value)
            .subscribe(
                response => {
                    let username: string = response.username;
                    localStorage.setItem('username', username);
                },
                err => console.log(err)
            );
    }
}