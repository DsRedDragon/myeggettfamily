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
var UserDirectoryComponent = (function () {
    function UserDirectoryComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    UserDirectoryComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    UserDirectoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.userService.userList;
        this.userSubscription = this.userService.userListObjectChange.subscribe(function (value) {
            _this.users = value;
        });
        this.userService.getApplicationUsers()
            .subscribe(function (users) {
            _this.userService.userList = users;
            _this.userService.change(true);
        });
    };
    return UserDirectoryComponent;
}());
UserDirectoryComponent = __decorate([
    core_1.Component({
        selector: 'user-directory',
        template: require('./userdirectory.component.html')
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserDirectoryComponent);
exports.UserDirectoryComponent = UserDirectoryComponent;
//# sourceMappingURL=userdirectory.component.js.map