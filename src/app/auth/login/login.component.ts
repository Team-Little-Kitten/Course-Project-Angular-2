import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['../auth.common.css']
})
export class LoginComponent implements OnInit {
    private _router: Router;
    private _authService: AuthService;
    private _notificationService: NotificationsService;

    public form: FormGroup;
    public fb: FormBuilder;
    public options: Object;

    constructor(fb: FormBuilder, authService: AuthService, router: Router, notificationsService: NotificationsService) {
        this.fb = fb;
        this._authService = authService;
        this._router = router;
        this._notificationService = notificationsService;
        this.options = { timeOut: 1500, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
    }

    ngOnInit() {
        this.form = this.fb.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    login() {
        this._authService
            .loginUser(this.form.value)
            .subscribe(
            response => {
                let result = (typeof (response) === 'string') ? JSON.parse(response) : response;

                if (result.error) {
                    this._notificationService.create('Login failed!', 'Please try again.', 'error')
                } else {
                    let username: string = response.username;
                    localStorage.setItem('username', username);
                    this._authService.setIsUserLogged();
                    this._notificationService.create('Login successful!', 'Welcome.', 'success');
                    setTimeout(() => this._router.navigateByUrl('/profile'), 1500);
                }
            },
            err => this._notificationService.create('Login failed!', 'Please try again.', 'error'));
    }
}