import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['../auth.common.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    fb: FormBuilder;
    authService: AuthService;

    constructor(fb: FormBuilder, authService: AuthService) {
        this.fb = fb;
        this.authService = authService;
    }

    ngOnInit() {
        this.form = this.fb.group({
            username: ["", Validators.required],
            firstname: ["", Validators.required],
            lastname: ["", Validators.required],
            password: ["", Validators.required],
            confirmPassword: ["", Validators.required]
        });
    }

    register() {
        this.authService
            .registerUser(this.form.value)
            .subscribe(console.log, console.log);
    }
}
