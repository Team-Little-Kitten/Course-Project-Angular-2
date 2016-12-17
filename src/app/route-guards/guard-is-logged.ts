import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class GuardIsLoggedUser implements CanActivate {
    private _authService: AuthService;

    constructor(authService: AuthService) {
        this._authService = authService;
    }

    public canActivate() {
        return this._authService.isLoggedIn();
    }
}
