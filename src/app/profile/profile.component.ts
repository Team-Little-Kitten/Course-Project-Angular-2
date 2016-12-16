import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    username: string;

    constructor() {
        this.username = JSON.parse(localStorage.getItem('user')).result.username;
    }
}