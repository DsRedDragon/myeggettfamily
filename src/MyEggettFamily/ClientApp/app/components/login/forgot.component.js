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
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var forgot_model_1 = require("../../models/forgot.model");
var ForgotComponent = (function () {
    function ForgotComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginInfo = new forgot_model_1.Forgot();
        this.gotUser = false;
    }
    ForgotComponent.prototype.login = function (form) {
        var _this = this;
        this.loginInfo.username = form.username;
        this.userService.getQuestion(this.loginInfo.username)
            .subscribe(function (res) {
            if (res.question !== null && res.question !== undefined && res.question !== '') {
                _this.gotUser = true;
                _this.loginInfo = res;
            }
            else {
                _this.gotUser = false;
                _this.failureModal.show();
            }
        });
        return false;
    };
    ForgotComponent.prototype.reset = function (questionForm) {
        var _this = this;
        this.loginInfo.answer = questionForm.answer;
        this.loginInfo.newPassword = questionForm.newPassword;
        this.loginInfo.applicationUserId = questionForm.applicationUserId;
        this.userService.resetPassword(this.loginInfo)
            .subscribe(function (res) {
            if (res.success) {
                _this.successModal.show();
            }
            else {
                _this.failureQuestionModal.show();
            }
        });
        return false;
    };
    ForgotComponent.prototype.dismissModal = function () {
        this.router.navigate(['/home']);
    };
    return ForgotComponent;
}());
__decorate([
    core_1.ViewChild('successModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ForgotComponent.prototype, "successModal", void 0);
__decorate([
    core_1.ViewChild('failureModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ForgotComponent.prototype, "failureModal", void 0);
__decorate([
    core_1.ViewChild('failureQuestionModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ForgotComponent.prototype, "failureQuestionModal", void 0);
ForgotComponent = __decorate([
    core_1.Component({
        selector: 'forgot',
        template: require('./forgot.component.html')
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], ForgotComponent);
exports.ForgotComponent = ForgotComponent;
//# sourceMappingURL=forgot.component.js.map