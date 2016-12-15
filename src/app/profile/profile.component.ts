import { Component } from '@angular/core';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    username: string;

    constructor() {
        this.username = localStorage.getItem('username');
    }
}