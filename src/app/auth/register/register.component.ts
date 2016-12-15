import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';

import { AuthService } from '../auth.service';

const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 20;
const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 30;

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['../auth.common.css']
})
export class RegisterComponent implements OnInit {
    private _authService: AuthService;
    private _router: Router;
    private _notificationService: NotificationsService;

    form: FormGroup;
    fb: FormBuilder;
    options: Object;

    constructor(fb: FormBuilder, authService: AuthService, router: Router, notificationsService: NotificationsService) {
        this.fb = fb;
        this._authService = authService;
        this._router = router;
        this._notificationService = notificationsService;
        this.options = { timeOut: 1500, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
    }

    ngOnInit() {
        let namesValidators = [Validators.required, Validators.minLength(MIN_NAME_LENGTH), Validators.maxLength(MAX_NAME_LENGTH)];
        this.form = this.fb.group({
            username: ["", Validators.compose(namesValidators)],
            firstname: ["", Validators.compose(namesValidators)],
            lastname: ["", Validators.compose(namesValidators)],
            password: ["", Validators.compose([Validators.required, Validators.minLength(MIN_PASSWORD_LENGTH), Validators.maxLength(MAX_PASSWORD_LENGTH)])],
            confirmPassword: ["", Validators.required]
        });
    }

    register() {
        this._authService
            .registerUser(this.form.value)
            .subscribe(
            response => {
                if (response.message) {
                    this._notificationService.create('Registration failed.', 'User with this username already exists.', 'error');
                } else {
                    this._notificationService.create('Registration successful.', 'Now you can log in.', 'success');
                    setTimeout(() => this._router.navigateByUrl('/login'), 1500);
                }
            },
            err => console.log(err));
    }
}
