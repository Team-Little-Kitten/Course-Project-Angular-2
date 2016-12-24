import { Component, OnInit } from '@angular/core';

import { IUser } from './../../profile/user';

import { WritersSharedService } from './../writers-shared.service';

@Component({
    templateUrl: './writers-all.component.html',
    styleUrls: ['./../shared-styles.component.css']
})

export class WritersAllComponent {
    public writersService: WritersSharedService;
    private _users: IUser[];

    constructor(writersService: WritersSharedService) {
        this.writersService = writersService;
    }

    get users(): IUser[] {
        return this.writersService.getUsers();
    }
}
