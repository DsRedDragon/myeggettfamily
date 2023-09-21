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
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var CommentListComponent = (function () {
    function CommentListComponent(commentService, activatedRoute, userService) {
        this.commentService = commentService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.comments = [];
        this.id = 0;
        this.isLoggedIn = false;
        this.comment = {
            message: 'You must be logged in to comment',
            articleId: 0,
            applicationUserId: 0,
            isAdmin: false
        };
    }
    CommentListComponent.prototype.saveComment = function (form) {
        var _this = this;
        this.comment.message = form.message;
        this.commentService.saveComment(this.comment).subscribe(function (result) {
            if (result.approved) {
                _this.commentModal.show();
            }
            else {
                _this.commentNoAdminModal.show();
            }
            _this.commentService.getComments(result.articleId).subscribe(function (result) {
                _this.comments = result;
                _this.comment.message = 'Enter Comment';
            });
        });
        return false;
    };
    CommentListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.userSubscription.unsubscribe();
    };
    CommentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id === 0 || this.id === undefined) {
            this.activatedRoute.params.subscribe(function (param) {
                _this.id = param['id'];
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
                .subscribe(function (comment) {
                _this.comments = comment;
            });
        }
        if (this.isLoggedIn) {
            this.comment.message = 'Enter Comment';
        }
        this.subscription = this.userService.stateChange.subscribe(function (value) {
            _this.isLoggedIn = value;
            _this.comment.message = 'Enter Comment';
        });
        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
            if (value !== undefined) {
                _this.comment.applicationUserId = value.applicationUserId;
                _this.comment.isAdmin = value.isAdmin;
            }
        });
    };
    return CommentListComponent;
}());
__decorate([
    core_1.ViewChild('commentNoAdminModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], CommentListComponent.prototype, "commentNoAdminModal", void 0);
__decorate([
    core_1.ViewChild('commentModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], CommentListComponent.prototype, "commentModal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CommentListComponent.prototype, "id", void 0);
CommentListComponent = __decorate([
    core_1.Component({
        selector: 'comment-list',
        template: require('./commentlist.component.html'),
        providers: [comment_service_1.CommentService]
    }),
    __metadata("design:paramtypes", [comment_service_1.CommentService, router_1.ActivatedRoute, user_service_1.UserService])
], CommentListComponent);
exports.CommentListComponent = CommentListComponent;
//# sourceMappingURL=commentlist.component.js.map