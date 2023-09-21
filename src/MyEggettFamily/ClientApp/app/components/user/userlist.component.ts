
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service'
import { AppUser } from '../../models/appUser.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'user-list',
    template: require('./userlist.component.html')
})
export class UserListComponent implements OnInit {

    users: AppUser[] = [];
    isSystemAdmin = false;
    myUser: AppUser;
    
    confirmText: string = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
    cancelText: string = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
    
    unApproveTitle: string = 'Make Admin';
    unApproveMessage: string = 'Are you <b>sure</b> you want to make this user an Admin?';

    approveTitle: string = 'Remove Admin';
    approveMessage: string = 'Are you <b>sure</b> you want to remove this users admin permissions?';

    unApproveSysTitle: string = 'Make System Admin';
    unApproveSysMessage: string = 'Are you <b>sure</b> you want to make this user a System Admin?';

    approveSysTitle: string = 'Remove System Admin';
    approveSysMessage: string = 'Are you <b>sure</b> you want to remove this users system admin permissions?';
    
    userSubscription: Subscription;

    constructor(private userService: UserService) {}

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.userService.getApplicationUsers()
            .subscribe(users => {
                this.users = users;
            });

        this.myUser = this.userService.user;

        this.userSubscription = this.userService.userObjectChange.subscribe((value) => {
            this.myUser = value;
            this.isSystemAdmin = value.isSystemAdmin;
        });
    }

    approveUser(user) {
        user.isAdmin = true;
        this.userService.saveProfile(user, '');
    }

    unApproveUser(user) {
        user.isAdmin = false;
        this.userService.saveProfile(user, '');
    }

    approveSysUser(user) {
        user.isSystemAdmin = true;
        this.userService.saveProfile(user, '');
    }

    unApproveSysUser(user) {
        user.isSystemAdmin = false;
        this.userService.saveProfile(user, '');
    }
}
