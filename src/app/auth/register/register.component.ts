import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['../auth.common.css']
})
export class RegisterComponent implements OnInit {
    private _authService: AuthService;
    private _router: Router;

    form: FormGroup;
    fb: FormBuilder;

    constructor(fb: FormBuilder, authService: AuthService, router: Router) {
        this.fb = fb;
        this._authService = authService;
        this._router = router;
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
        this._authService
            .registerUser(this.form.value)
            .subscribe(
            () => this._router.navigateByUrl('/login'),
            err => console.log(err));
    }
}
