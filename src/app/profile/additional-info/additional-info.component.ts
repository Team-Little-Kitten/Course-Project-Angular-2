import { Component } from '@angular/core';

@Component({
    templateUrl: './additional-info.component.html',
    styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent {
    public user: Object;
    public isInEditMode: boolean;

    constructor() {
        this.isInEditMode = false;
        this.user = JSON.parse(localStorage.getItem('user')).result;
    }
}