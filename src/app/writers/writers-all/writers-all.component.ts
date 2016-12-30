import { Component, OnInit } from '@angular/core';

import { IUser } from './../../profile/user';

import { WritersSharedService } from './../writers-shared.service';

@Component({
    templateUrl: './writers-all.component.html',
    styleUrls: ['./../shared-styles.component.css']
})

export class WritersAllComponent {
    public writersService: WritersSharedService;
    public currentPage: number = 1;
    public pageSize: number = 6;
    private _users: IUser[];

    constructor(writersService: WritersSharedService) {
        this.writersService = writersService;
    }

    get users(): IUser[] {
        return this.writersService.getUsers();
    }

    get pages(): number {
        return this.writersService.getUsersLength() / this.pageSize;
    }
}
