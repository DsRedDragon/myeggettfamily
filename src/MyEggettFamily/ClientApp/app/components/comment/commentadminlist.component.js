"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var comment_service_1 = require("../../services/comment.service");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var CommentAdminListComponent = (function () {
    function CommentAdminListComponent(commentService) {
        this.commentService = commentService;
        this.comments = [];
        this.commentsLoaded = false;
        this.title = 'Delete Comment';
        this.message = 'Are you <b>sure</b> you want to delete this comment?';
        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
        this.newTitle = 'Mark as Read';
        this.newMessage = 'Are you <b>sure</b> you want to mark this item as read?';
        this.readTitle = 'Mark as Unread';
        this.readMessage = 'Are you <b>sure</b> you want to mark this item as unread?';
        this.unApproveTitle = 'Approve Comment';
        this.unApproveMessage = 'Are you <b>sure</b> you want to approve this comment?';
        this.approveTitle = 'Un-Approve Comment';
        this.approveMessage = 'Are you <b>sure</b> you want to un-approve this comment?';
    }
    CommentAdminListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentService.getCommentsAdmin()
            .subscribe(function (comments) {
            _this.comments = comments;
            _this.commentsLoaded = true;
        });
    };
    CommentAdminListComponent.prototype.confirmClicked = function (comment) {
        var _this = this;
        this.commentService.deleteComment(comment.commentId).subscribe(function (result) {
            var index = _this.comments.indexOf(comment);
            _this.comments.splice(index, 1);
            _this.deleteModal.show();
        });
    };
    CommentAdminListComponent.prototype.approveComment = function (comment) {
        comment.approved = true;
        comment.isNew = false;
        this.commentService.updateComment(comment)
            .subscribe(function (result) {
        });
    };
    CommentAdminListComponent.prototype.unApproveComment = function (comment) {
        comment.approved = false;
        this.commentService.updateComment(comment)
            .subscribe(function (result) {
        });
    };
    CommentAdminListComponent.prototype.markRead = function (comment) {
        comment.isNew = false;
        this.commentService.updateComment(comment)
            .subscribe(function (result) {
        });
    };
    CommentAdminListComponent.prototype.markUnRead = function (comment) {
        comment.isNew = true;
        this.commentService.updateComment(comment)
            .subscribe(function (result) {
        });
    };
    return CommentAdminListComponent;
}());
__decorate([
    core_1.ViewChild('deleteModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], CommentAdminListComponent.prototype, "deleteModal", void 0);
CommentAdminListComponent = __decorate([
    core_1.Component({
        selector: 'comment-admin-list',
        template: require('./commentadminlist.component.html')
    }),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentAdminListComponent);
exports.CommentAdminListComponent = CommentAdminListComponent;
//# sourceMappingURL=commentadminlist.component.js.map