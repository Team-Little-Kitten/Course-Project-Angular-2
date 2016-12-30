import { Component, OnInit, trigger, state, animate, transition, style} from '@angular/core';

import { IUser } from './../../profile/user';

import { WritersSharedService } from './../writers-shared.service';

@Component({
    templateUrl: './writers-all.component.html',
    styleUrls: ['./../shared-styles.component.css'],
    animations: [
        trigger('slide', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({transform: 'translateX(100%)'}))
            ])
        ])
    ]
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
