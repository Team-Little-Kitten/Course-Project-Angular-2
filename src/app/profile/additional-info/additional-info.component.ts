import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { UserService } from '../../common-services/user.service';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';
import { IUser } from '../user';

const MIN_STRING_LENGTH = 5;

@Component({
    templateUrl: './additional-info.component.html',
    styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent {
    public user: IUser;
    public isInEditMode: boolean;
    public form: FormGroup;
    public fb: FormBuilder;
    public options: Object;

    private _userService: UserService;
    private _notificationService: NotificationsService;

    constructor(fb: FormBuilder, userService: UserService, notificationService: NotificationsService) {
        this.fb = fb;
        this._userService = userService;
        this._notificationService = notificationService;
        this.isInEditMode = false;
        this.form = this.fb.group({ about: [''], signature: [''] });
        this.options = { timeOut: 1500, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
        this._setUser();
    }

    public toggleEditMode(): void {
        this.isInEditMode = !this.isInEditMode;
    }

    public updateAdditionalInfo(): void {
        let userId = JSON.parse(localStorage.getItem('user')).result._id;
        this._userService
            .updateUserData(userId, this.form.value)
            .subscribe(x => {
                if (x) {
                    localStorage.setItem('user', JSON.stringify(x));
                    this._setUser();
                    this.toggleEditMode();
                    this._notificationService.create('Success!', 'Profile updated.', 'success');
                }
            }, console.log);
    }

    public onFileUpload(event: any): void {
        let file = event.target.files[0];
        let reader: FileReader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            let userId: string = JSON.parse(localStorage.getItem('user')).result._id;
            let dataUrl: string = reader.result;
            this._userService
                .updateUserData(userId, { imageDataUrl: dataUrl })
                .subscribe(res => {
                    if (res.success) {
                        this.user = <IUser>res.result;
                        localStorage.setItem('user', JSON.stringify(res));
                        this._userService.setIsUserObjectUpdated();
                        return;
                    }

                    console.log('Image upload failed.');
                },
                console.log);
        };
    }

    private _setUser(): void {
        this.user = JSON.parse(localStorage.getItem('user')).result;
    }
}
