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
var user_service_1 = require("../../services/user.service");
var FeedBackListComponent = (function () {
    function FeedBackListComponent(commentService, userService) {
        this.commentService = commentService;
        this.userService = userService;
        this.suggestions = [];
        this.suggestionLoaded = true;
        this.title = 'Delete Feedback';
        this.message = 'Are you <b>sure</b> you want to delete this feedback?';
        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
        this.progressTitle = 'Mark In progress';
        this.progressMessage = 'Are you <b>sure</b> you want to mark this as In Progress?';
        this.completeTitle = 'Mark As Complete';
        this.completeMessage = 'Are you <b>sure</b> you want to mark this as Complete?';
        this.isLoggedIn = false;
        this.userId = 0;
    }
    FeedBackListComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    FeedBackListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = this.userService.isLoggedIn;
        this.user = this.userService.user;
        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
            _this.user = value;
        });
        if (!this.admin) {
            this.userId = this.user.applicationUserId;
        }
        this.refresh();
    };
    FeedBackListComponent.prototype.confirmClicked = function (feedback) {
        var _this = this;
        this.commentService.deleteSuggestion(feedback.suggestionId).subscribe(function (result) {
            var index = _this.suggestions.indexOf(feedback);
            _this.suggestions.splice(index, 1);
            _this.suggestionLoaded = true;
            _this.deleteModal.show();
        });
    };
    FeedBackListComponent.prototype.markInProgress = function (feedback) {
        var _this = this;
        feedback.statusId = 6;
        this.commentService.updateSuggestion(feedback)
            .subscribe(function (result) {
            var index = _this.suggestions.indexOf(feedback);
            _this.suggestions.splice(index, 1, result);
            _this.refresh();
        });
    };
    FeedBackListComponent.prototype.markComplete = function (feedback) {
        var _this = this;
        feedback.statusId = 8;
        this.commentService.updateSuggestion(feedback)
            .subscribe(function (result) {
            var index = _this.suggestions.indexOf(feedback);
            _this.suggestions.splice(index, 1, result);
            _this.refresh();
        });
    };
    FeedBackListComponent.prototype.refresh = function () {
        var _this = this;
        this.commentService.getSuggestionViews(this.userId)
            .subscribe(function (feedback) {
            _this.suggestions = feedback;
            _this.suggestionLoaded = true;
        });
    };
    return FeedBackListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FeedBackListComponent.prototype, "admin", void 0);
__decorate([
    core_1.ViewChild('deleteModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], FeedBackListComponent.prototype, "deleteModal", void 0);
FeedBackListComponent = __decorate([
    core_1.Component({
        selector: 'feedback-list',
        template: require('./feedbacklist.component.html')
    }),
    __metadata("design:paramtypes", [comment_service_1.CommentService, user_service_1.UserService])
], FeedBackListComponent);
exports.FeedBackListComponent = FeedBackListComponent;
//# sourceMappingURL=feedbacklist.component.js.map