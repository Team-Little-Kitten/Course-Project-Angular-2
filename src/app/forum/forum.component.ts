import { Component } from '@angular/core';

@Component({
    templateUrl: './forum.component.html',
    styleUrls: ['./forum.component.css']
})
export class ForumComponent {
    public isLoggedIn: boolean;

    constructor() {
        this.isLoggedIn = !!localStorage.getItem('user');
    }
 }
 