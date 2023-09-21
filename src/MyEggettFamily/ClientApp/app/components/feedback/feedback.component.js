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
var user_service_1 = require("../../services/user.service");
var comment_service_1 = require("../../services/comment.service");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var suggestion_model_1 = require("../../models/suggestion.model");
var FeedbackComponent = (function () {
    function FeedbackComponent(userService, router, commentService) {
        this.userService = userService;
        this.router = router;
        this.commentService = commentService;
        this.isLoggedIn = false;
        this.suggestion = new suggestion_model_1.Suggestion();
    }
    FeedbackComponent.prototype.ngOnDestroy = function () {
        if (this.userSubscription !== null && this.userSubscription !== undefined) {
            this.userSubscription.unsubscribe();
        }
    };
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.checkLogin(window.location.pathname)
            .subscribe(function (res) {
            if (_this.userService.isLoggedIn) {
                _this.user = _this.userService.user;
                _this.userSubscription = _this.userService.userObjectChange.subscribe(function (value) {
                    _this.user = value;
                });
                if (_this.userService.isLoggedIn) {
                    _this.commentService.getSuggestionTypes()
                        .subscribe(function (res) {
                        _this.types = [];
                        res.forEach(function (result) {
                            _this.types.push({ label: result.value, value: result.listEnumId });
                        });
                    });
                    _this.suggestion.typeId = 0;
                }
            }
        });
    };
    FeedbackComponent.prototype.saveFeedback = function (form) {
        var _this = this;
        this.suggestion.applicationUserId = this.user.applicationUserId;
        this.suggestion.typeId = form.typeId;
        this.suggestion.value = form.feedback;
        this.commentService.insertFeedback(this.suggestion).subscribe(function (res) {
            _this.feedbackModal.show();
        });
        return false;
    };
    FeedbackComponent.prototype.dismissModal = function () {
        this.router.navigate(['/feedbackredirect']);
    };
    return FeedbackComponent;
}());
__decorate([
    core_1.ViewChild('feedbackModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], FeedbackComponent.prototype, "feedbackModal", void 0);
FeedbackComponent = __decorate([
    core_1.Component({
        selector: 'feedback',
        template: require('./feedback.component.html')
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, comment_service_1.CommentService])
], FeedbackComponent);
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=feedback.component.js.map