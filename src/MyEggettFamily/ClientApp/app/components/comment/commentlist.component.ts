
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
    selector: 'comment-list',
    template: require('./commentlist.component.html'),
    providers: [CommentService]
})

export class CommentListComponent implements OnInit {
    @ViewChild('commentNoAdminModal') commentNoAdminModal: ModalDirective;
    @ViewChild('commentModal') commentModal: ModalDirective;
    comments = [];
    @Input() id = 0;
    isLoggedIn = false;

    subscription: Subscription;
    userSubscription: Subscription;

    comment = {
        message: 'You must be logged in to comment',
        articleId: 0,
        applicationUserId: 0,
        isAdmin: false
    }

    constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute, private userService: UserService) { }

    saveComment(form: any) {
        this.comment.message = form.message;
        this.commentService.saveComment(this.comment).subscribe(result => {
            
            if (result.approved) {
                this.commentModal.show();
            }
            else {
                this.commentNoAdminModal.show();
            }

            this.commentService.getComments(result.articleId).subscribe(result => {
                this.comments = result;
                this.comment.message = 'Enter Comment';
            });
        });
        return false;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userSubscription.unsubscribe();
    }

    ngOnInit(): void {
        if (this.id === 0 || this.id === undefined) {
            this.activatedRoute.params.subscribe(
                (param: any) => {
                    this.id = param['id'];
                });
        }

        this.isLoggedIn = this.userService.isLoggedIn;
        this.comment.articleId = this.id;
        if (this.userService.user !== undefined) {
            this.comment.applicationUserId = this.userService.user.applicationUserId;
            this.comment.isAdmin = this.userService.user.isAdmin;
        }

        if (this.id > 0) {
            this.commentService.getComments(this.id)
                .subscribe(comment => {
                    this.comments = comment;
                });
        }

        if (this.isLoggedIn) {
            this.comment.message = 'Enter Comment';
        }

        this.subscription = this.userService.stateChange.subscribe((value) => {
            this.isLoggedIn = value;
            this.comment.message = 'Enter Comment';
        });

        this.userSubscription = this.userService.userObjectChange.subscribe((value) => {
            if (value !== undefined) {
                this.comment.applicationUserId = value.applicationUserId;
                this.comment.isAdmin = value.isAdmin;
            }
        });
    }
}
