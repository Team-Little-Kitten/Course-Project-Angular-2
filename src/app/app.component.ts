import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './common-services';
import { AuthService } from './auth';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private _userService: UserService;
    private _router: Router;
    private _authService: AuthService;

    public isUserLoggedIn: boolean;

    constructor(userService: UserService, router: Router, authService: AuthService) {
        this._userService = userService;
        this._router = router;
        this._authService = authService;
        this.isUserLoggedIn = !!localStorage.getItem('user');
    }

    ngOnInit() {
        this._userService
            .getIsUserLoggedIn()
            .subscribe((isLogged: boolean) => this.isUserLoggedIn = isLogged);
    }

    logout() {
        this._authService.logoutUser();
        this._router.navigateByUrl('/');
        this._userService.setIsUserLogged();
    }
}