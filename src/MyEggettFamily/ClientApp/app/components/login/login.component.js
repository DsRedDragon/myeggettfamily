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
var login_model_1 = require("../../models/login.model");
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginInfo = new login_model_1.Login();
    }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.loginInfo.username = form.username;
        this.loginInfo.password = form.password;
        this.userService.login(this.loginInfo)
            .subscribe(function (res) {
            if (res !== undefined && res !== null && res > 0) {
                _this.successModal.show();
            }
            else {
                _this.failureModal.show();
            }
        });
        return false;
    };
    LoginComponent.prototype.dismissModal = function () {
        var url = this.router.url.replace('/login', '');
        this.userService.saveLoginTime(false).subscribe(function (x) {
            var res = x;
        });
        this.router.navigate([url]);
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('successModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], LoginComponent.prototype, "successModal", void 0);
__decorate([
    core_1.ViewChild('failureModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], LoginComponent.prototype, "failureModal", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: require('./login.component.html')
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map