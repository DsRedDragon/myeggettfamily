
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CommentService } from '../../services/comment.service'
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ModalDirective } from 'ng2-bootstrap'

@Component({
    selector: 'comment-admin-list',
    template: require('./commentadminlist.component.html')
})
export class CommentAdminListComponent implements OnInit {
    
    comments = [];
    commentsLoaded = false;

    @ViewChild('deleteModal') public deleteModal: ModalDirective;

    title: string = 'Delete Comment';
    message: string = 'Are you <b>sure</b> you want to delete this comment?';
    confirmText: string = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
    cancelText: string = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';

    newTitle: string = 'Mark as Read';
    newMessage: string = 'Are you <b>sure</b> you want to mark this item as read?';

    readTitle: string = 'Mark as Unread';
    readMessage: string = 'Are you <b>sure</b> you want to mark this item as unread?';

    unApproveTitle: string = 'Approve Comment';
    unApproveMessage: string = 'Are you <b>sure</b> you want to approve this comment?';

    approveTitle: string = 'Un-Approve Comment';
    approveMessage: string = 'Are you <b>sure</b> you want to un-approve this comment?';

    constructor(private commentService: CommentService) {}

    ngOnInit(): void {
        this.commentService.getCommentsAdmin()
            .subscribe(comments => {
                this.comments = comments;
                this.commentsLoaded = true;
            });
    }

    confirmClicked(comment) {

        this.commentService.deleteComment(comment.commentId).subscribe(result => {

            var index = this.comments.indexOf(comment);
            this.comments.splice(index, 1);

            this.deleteModal.show();
        });
    }

    approveComment(comment) {
        comment.approved = true;
        comment.isNew = false;
        this.commentService.updateComment(comment)
            .subscribe(result => {
            });
    }

    unApproveComment(comment) {
        comment.approved = false;
        this.commentService.updateComment(comment)
            .subscribe(result => {
            });
    }

    markRead(comment) {
        comment.isNew = false;
        this.commentService.updateComment(comment)
            .subscribe(result => {
            });
    }

    markUnRead(comment) {
        comment.isNew = true;
        this.commentService.updateComment(comment)
            .subscribe(result => {
            });
    }
}
