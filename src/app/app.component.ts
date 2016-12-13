import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private _authService: AuthService;

    public isUserLoggedIn: boolean;

    constructor(authService: AuthService) {
        this._authService = authService;
        this.isUserLoggedIn = !!localStorage.getItem('username');
    }

    ngOnInit() {
        this._authService
            .getIsUserLoggedIn()
            .subscribe((isLogged: boolean) => this.isUserLoggedIn = isLogged);
    }
}