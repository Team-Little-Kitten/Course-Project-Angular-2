import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { UserService } from '../../common-services';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['../auth.common.css']
})
export class LoginComponent implements OnInit {
    @HostBinding('class') public classes = 'signup-page';
    public form: FormGroup;
    public fb: FormBuilder;
    public options: Object;

    private _router: Router;
    private _authService: AuthService;
    private _notificationService: NotificationsService;
    private _userService: UserService;

    constructor(
        fb: FormBuilder,
        authService: AuthService,
        router: Router,
        notificationsService: NotificationsService,
        userService: UserService) {
        this._userService = userService;
        this.fb = fb;
        this._authService = authService;
        this._router = router;
        this._notificationService = notificationsService;
        this.options = { timeOut: 1500, pauseOnHover: true, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
    }

    public ngOnInit(): void {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public login(): void {
        this._authService
            .loginUser(this.form.value)
            .subscribe((response: any) => {
                let result: any = (typeof (response) === 'string') ? JSON.parse(response) : response;

                if (result.error) {
                    this._notificationService.error('Login failed!', 'Please try again.');
                } else {
                    localStorage.setItem('user', JSON.stringify(result));
                    this._userService.setIsUserLogged();
                    this._notificationService.success('Login successful!', 'Welcome.');
                    setTimeout(() => this._router.navigateByUrl('/profile'), 1500);
                }
            },
            () => this._notificationService.error('Login failed!', 'Please try again.'));
    }

    public facebookLogin(): void {
        this._authService
            .facebookLogin()
            .subscribe(console.log, console.log);
    }
}
