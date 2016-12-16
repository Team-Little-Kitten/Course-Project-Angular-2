import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { UserService } from '../../common-services/user.service';

const MIN_STRING_LENGTH = 5;

@Component({
    templateUrl: './additional-info.component.html',
    styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent {
    private _userService: UserService;

    public user: Object;
    public isInEditMode: boolean;
    public form: FormGroup;
    public fb: FormBuilder;

    constructor(fb: FormBuilder, userService: UserService) {
        this.fb = fb;
        this._userService = userService;
        this.isInEditMode = false;
        this.form = this.fb.group({ about: [""], signature: [""] });
        this._setUser();
    }

    toggleEditMode(): void {
        this.isInEditMode = !this.isInEditMode;
    }

    updateAdditionalInfo(): void {
        let userId = JSON.parse(localStorage.getItem('user')).result._id;
        this._userService
            .updateUserDate(userId, this.form.value)
            .subscribe(x => {
                if (x) {
                    localStorage.setItem('user', JSON.stringify(x));
                    this._setUser();
                    this.toggleEditMode();
                }
            }, console.log);
    }

    private _setUser(): void {
        this.user = JSON.parse(localStorage.getItem('user')).result;
    }
}