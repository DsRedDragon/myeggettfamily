import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
})
export class NavMenuComponent implements OnInit {
    
    constructor(private userService: UserService, private router: Router) {  }

    ngOnInit(): void {

        this.userService.checkLogin(window.location.pathname)
            .subscribe(res => {
            });
    }
}
