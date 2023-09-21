
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { ModalDirective } from 'ng2-bootstrap';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { AppUser } from '../../models/appUser.model';

@Component({
    selector: 'feedback-list',
    template: require('./feedbacklist.component.html')
})
export class FeedBackListComponent implements OnInit {

    @Input() admin: boolean;
    suggestions = [];
    suggestionLoaded = true;

    @ViewChild('deleteModal') public deleteModal: ModalDirective;

    title: string = 'Delete Feedback';
    message: string = 'Are you <b>sure</b> you want to delete this feedback?';
    confirmText: string = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
    cancelText: string = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';

    progressTitle: string = 'Mark In progress';
    progressMessage: string = 'Are you <b>sure</b> you want to mark this as In Progress?';

    completeTitle: string = 'Mark As Complete';
    completeMessage: string = 'Are you <b>sure</b> you want to mark this as Complete?';
    isLoggedIn = false;
    user: AppUser;
    userId = 0;

    userSubscription: Subscription;

    constructor(private commentService: CommentService, private userService: UserService) { }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

    ngOnInit(): void {

        this.isLoggedIn = this.userService.isLoggedIn;
        this.user = this.userService.user;

        this.userSubscription = this.userService.userObjectChange.subscribe((value) => {
            this.user = value;
        });

        if (!this.admin) {
            this.userId = this.user.applicationUserId;
        }

        this.refresh();
    }

    confirmClicked(feedback) {

        this.commentService.deleteSuggestion(feedback.suggestionId).subscribe(result => {

            var index = this.suggestions.indexOf(feedback);
            this.suggestions.splice(index, 1);

            this.suggestionLoaded = true;

            this.deleteModal.show();
        });
    }

    markInProgress(feedback) {
        feedback.statusId = 6;
        this.commentService.updateSuggestion(feedback)
            .subscribe(result => {
                var index = this.suggestions.indexOf(feedback);
                this.suggestions.splice(index, 1, result);
                this.refresh();
            });
    }

    markComplete(feedback) {
        feedback.statusId = 8;
        this.commentService.updateSuggestion(feedback)
            .subscribe(result => {
                var index = this.suggestions.indexOf(feedback);
                this.suggestions.splice(index, 1, result);
                this.refresh();
            });
    }

    refresh() {
        this.commentService.getSuggestionViews(this.userId)
            .subscribe(feedback => {
                this.suggestions = feedback;
                this.suggestionLoaded = true;
            });
    }
}
