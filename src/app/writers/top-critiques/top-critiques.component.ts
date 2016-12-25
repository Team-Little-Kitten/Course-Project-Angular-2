import { Component, OnInit } from '@angular/core';

import { IUser } from './../../profile/user';

import { WritersSharedService } from './../writers-shared.service';

@Component({
    templateUrl: './top-critiques.component.html',
    styleUrls: ['./../shared-styles.component.css']
})

export class TopCritiquesComponent {
    public writersService: WritersSharedService;
    private _users: IUser[];

    constructor(writersService: WritersSharedService) {
        this.writersService = writersService;
    }

    get users(): IUser[] {
        return this.writersService.getUsers();
    }
}