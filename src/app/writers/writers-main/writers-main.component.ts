import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { WritersSharedService } from './../writers-shared.service';
import { UserService } from './../../common-services/user.service';

@Component({
    templateUrl: './writers-main.component.html',
    styleUrls: ['./writers-main.component.css']
})

export class WritersMainComponent implements OnInit {
    public writersService: WritersSharedService;
    public userService: UserService;

    constructor(writerService: WritersSharedService, userService: UserService) {
        this.writersService = writerService;
        this.userService = userService;
    }

    ngOnInit() {
        this.userService
            .getAllUsersData()
            .subscribe(result => {
                this.writersService.setUsers(result.users);
            });
         }
}
