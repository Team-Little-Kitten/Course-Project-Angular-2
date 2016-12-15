import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['../auth.common.css']
})
export class LoginComponent implements OnInit {
    private _router: Router;
    private _authService: AuthService;

    public form: FormGroup;
    public fb: FormBuilder;

    constructor(fb: FormBuilder, authService: AuthService, router: Router) {
        this.fb = fb;
        this._authService = authService;
        this._router = router;
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
                let username: string = response.username;
                localStorage.setItem('username', username);
                this._authService.setIsUserLogged();
                this._router.navigateByUrl('/profile');
            },
            err => console.log(err));
    }
}