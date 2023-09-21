
import { Component, ViewChild, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';
import { AppUser } from '../../models/appUser.model';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';

@
    Component({
        selector: 'admin',
        template: require('./admin.component.html')
    })
export class AdminComponent implements OnInit {


    user: AppUser;
    isLoggedIn = false;
    userSubscription: Subscription;
    stateSubscription: Subscription;

    constructor(private userService: UserService, private router: Router) { }

    ngOnDestroy() {
        if (this.userSubscription !== null && this.userSubscription !== undefined) {
            this.userSubscription.unsubscribe();
        }
        if (this.stateSubscription !== null && this.stateSubscription !== undefined) {
            this.stateSubscription.unsubscribe();
        }
    }

    ngOnInit(): void {

        this.userService.checkLogin(window.location.pathname)
            .subscribe(res => {
                if (this.userService.isLoggedIn) {
                    this.user = this.userService.user;

                    this.stateSubscription = this.userService.stateChange.subscribe((value) => {
                        this.isLoggedIn = value;
                    });

                    this.userSubscription = this.userService.userObjectChange.subscribe((value) => {
                        this.user = value;
                    });
                }
            });
    }
}

