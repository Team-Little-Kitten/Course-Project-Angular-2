import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './common-services';
import { AuthService } from './auth';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public isUserLoggedIn: boolean;

    private _userService: UserService;
    private _router: Router;
    private _authService: AuthService;

    constructor(userService: UserService, router: Router, authService: AuthService) {
        this._userService = userService;
        this._router = router;
        this._authService = authService;
        this.isUserLoggedIn = !!localStorage.getItem('user');
    }

    public ngOnInit() {
        this._userService
            .getIsUserLoggedIn()
            .subscribe((isLogged: boolean) => this.isUserLoggedIn = isLogged);
    }

    public logout() {
        this._authService.logoutUser();
        this._router.navigateByUrl('/');
        this._userService.setIsUserLogged();
    }
}
