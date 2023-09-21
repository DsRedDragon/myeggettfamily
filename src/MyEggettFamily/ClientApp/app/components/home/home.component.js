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
var setting_service_1 = require("../../services/setting.service");
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(settingService, userService, router) {
        this.settingService = settingService;
        this.userService = userService;
        this.router = router;
        this.imageUrl = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.getSetting(1)
            .subscribe(function (x) {
            _this.imageUrl = x.settingValue;
        });
        this.userService.checkLogin(window.location.pathname)
            .subscribe(function (res) {
            if (!_this.userService.isLoggedIn) {
                _this.router.navigate(['/login']);
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: require('./home.component.html')
    }),
    __metadata("design:paramtypes", [setting_service_1.SettingService, user_service_1.UserService, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map