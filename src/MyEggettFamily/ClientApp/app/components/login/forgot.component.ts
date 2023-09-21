
import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';
import { AppUser } from '../../models/appUser.model';
import { Forgot } from '../../models/forgot.model';
import { SelectItem } from 'primeng/primeng';

@
    Component({
        selector: 'forgot',
        template: require('./forgot.component.html')
    })
export class ForgotComponent {
    @ViewChild('successModal') public successModal: ModalDirective;
    @ViewChild('failureModal') public failureModal: ModalDirective;
    @ViewChild('failureQuestionModal') public failureQuestionModal: ModalDirective;
    
    loginInfo = new Forgot();
    gotUser = false;

    constructor(private userService: UserService, private router: Router) { }
    
    login(form: any) {

        this.loginInfo.username = form.username;

        this.userService.getQuestion(this.loginInfo.username)
            .subscribe(res => {
            if (res.question !== null && res.question !== undefined && res.question !== '') {
                this.gotUser = true;
                this.loginInfo = res;
            } else {
                this.gotUser = false;
                this.failureModal.show();
            }
        });

        return false;
    }

    reset(questionForm: any) {

        this.loginInfo.answer = questionForm.answer;
        this.loginInfo.newPassword = questionForm.newPassword;
        this.loginInfo.applicationUserId = questionForm.applicationUserId;

        this.userService.resetPassword(this.loginInfo)
            .subscribe(res => {
                if (res.success) {
                    this.successModal.show();
                } else {
                    this.failureQuestionModal.show();
                }
            });

        return false;
    }

    dismissModal() {
        this.router.navigate(['/home']);
    }
}