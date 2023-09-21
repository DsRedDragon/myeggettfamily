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
var UserListComponent = (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.isSystemAdmin = false;
        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
        this.unApproveTitle = 'Make Admin';
        this.unApproveMessage = 'Are you <b>sure</b> you want to make this user an Admin?';
        this.approveTitle = 'Remove Admin';
        this.approveMessage = 'Are you <b>sure</b> you want to remove this users admin permissions?';
        this.unApproveSysTitle = 'Make System Admin';
        this.unApproveSysMessage = 'Are you <b>sure</b> you want to make this user a System Admin?';
        this.approveSysTitle = 'Remove System Admin';
        this.approveSysMessage = 'Are you <b>sure</b> you want to remove this users system admin permissions?';
    }
    UserListComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getApplicationUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
        this.myUser = this.userService.user;
        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
            _this.myUser = value;
            _this.isSystemAdmin = value.isSystemAdmin;
        });
    };
    UserListComponent.prototype.approveUser = function (user) {
        user.isAdmin = true;
        this.userService.saveProfile(user, '');
    };
    UserListComponent.prototype.unApproveUser = function (user) {
        user.isAdmin = false;
        this.userService.saveProfile(user, '');
    };
    UserListComponent.prototype.approveSysUser = function (user) {
        user.isSystemAdmin = true;
        this.userService.saveProfile(user, '');
    };
    UserListComponent.prototype.unApproveSysUser = function (user) {
        user.isSystemAdmin = false;
        this.userService.saveProfile(user, '');
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: 'user-list',
        template: require('./userlist.component.html')
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userlist.component.js.map