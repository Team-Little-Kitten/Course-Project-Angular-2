import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
    selector: 'body',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private _authService: AuthService;
    private _router: Router;
    
    public isUserLoggedIn: boolean;

    constructor(authService: AuthService, router: Router) {
        this._authService = authService;
        this._router = router;
        this.isUserLoggedIn = !!localStorage.getItem('user');
    }

    ngOnInit() {
        this._authService
            .getIsUserLoggedIn()
            .subscribe((isLogged: boolean) => this.isUserLoggedIn = isLogged);
    }

    logout() {
        this._authService.logoutUser();
        this._router.navigateByUrl('/');
        this._authService.setIsUserLogged();
    }
}