
import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';
import { AppUser } from '../../models/appUser.model';
import { Login } from '../../models/login.model';
import { SelectItem } from 'primeng/primeng';

@
    Component({
        selector: 'login',
        template: require('./login.component.html')
    })
export class LoginComponent {
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('failureModal') public failureModal: ModalDirective;
    
    loginInfo = new Login();

    constructor(private userService: UserService, private router: Router) { }
    
    login(form: any) {

        this.loginInfo.username = form.username;
        this.loginInfo.password = form.password;

        this.userService.login(this.loginInfo)
            .subscribe(res => {
            if (res !== undefined && res !== null && res > 0) {
                this.successModal.show();
            } else {
                this.failureModal.show();
            }
        });

        return false;
    }

    dismissModal() {
        var url = this.router.url.replace('/login', '');
        this.userService.saveLoginTime(false).subscribe(x => {
            var res = x;
        });
        this.router.navigate([url]);
    }
}