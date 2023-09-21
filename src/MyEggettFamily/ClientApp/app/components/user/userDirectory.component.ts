
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service'
import { AppUser } from '../../models/appUser.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'user-directory',
    template: require('./userdirectory.component.html')
})
export class UserDirectoryComponent implements OnInit {

    users: AppUser[] = [];
    userSubscription: Subscription;

    constructor(private userService: UserService) {}

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

    ngOnInit(): void {

        this.users = this.userService.userList;

        this.userSubscription = this.userService.userListObjectChange.subscribe((value) => {
            this.users = value;
        });

        this.userService.getApplicationUsers()
            .subscribe(users => {
                this.userService.userList = users;
                this.userService.change(true);
            });
    }
}
