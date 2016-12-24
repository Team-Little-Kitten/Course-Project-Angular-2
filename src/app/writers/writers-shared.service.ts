import { Injectable } from '@angular/core';

import { IUser } from './../profile/user';

@Injectable()
export class WritersSharedService {
    private users: IUser[];

    constructor() {
        this.users = [];
    }

    public getUsers(): IUser[] {
        return this.users;
    }

    public setUsers(result): void {
        this.users = result;
    }
}
