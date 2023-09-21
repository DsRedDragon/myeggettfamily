
import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@
    Component({
        selector: 'home',
        template: require('./home.component.html')
    })
export class HomeComponent implements OnInit {

    imageUrl = '';

    constructor(private settingService: SettingService, private userService: UserService, private router: Router) {
    }

    ngOnInit(): void {

        this.settingService.getSetting(1)
            .subscribe(x => {
                this.imageUrl = x.settingValue;
            });

        this.userService.checkLogin(window.location.pathname)
            .subscribe(res => {
                if (!this.userService.isLoggedIn) {
                    this.router.navigate(['/login']);
                }
            });

        
    }
}

