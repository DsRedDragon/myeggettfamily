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
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var router_1 = require("@angular/router");
var setting_service_1 = require("../services/setting.service");
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var router_2 = require("@angular/router");
var core_2 = require("@angular/core");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var UserService = (function () {
    function UserService(http, router, settingService, activatedRoute) {
        this.http = http;
        this.router = router;
        this.settingService = settingService;
        this.activatedRoute = activatedRoute;
        this.userInfoChanged = false;
        this.isLoggedIn = false;
        this.userId = 0;
        this.stateChange = new rxjs_1.Subject();
        this.userChange = new rxjs_1.Subject();
        this.userObjectChange = new rxjs_1.Subject();
        this.userListObjectChange = new rxjs_1.Subject();
    }
    UserService.prototype.getUser = function (id) {
        return this.http.get("/api/User/GetAppUserById?id=" + id)
            .map(function (result) { return result.json(); });
    };
    UserService.prototype.getQuestion = function (username) {
        return this.http.get("/api/User/GetQuestion?username=" + username)
            .map(function (result) { return result.json(); });
    };
    UserService.prototype.resetPassword = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/User/ResetPassword', JSON.stringify(user), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.checkUsername = function (name, id) {
        return this.http.get("/api/User/CheckUsername?username=" + name + "&id=" + id)
            .map(function (result) { return result.json(); });
    };
    UserService.prototype.getApplicationUsers = function () {
        return this.http.get('/api/User/GetApplicationUsers')
            .map(function (result) { return result.json(); });
    };
    UserService.prototype.getApplicationUsersForNotifications = function () {
        return this.http.get('/api/User/GetApplicationUsersForNotifications')
            .map(function (result) { return result.json(); });
    };
    UserService.prototype.saveProfile = function (user, code) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/User/UpdateUser?code=" + code, JSON.stringify(user), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.saveImageUrl = function (url) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.user.applicationUserDetail.imageUrl = url.changingThisBreaksApplicationSecurity;
        return this.http.post('/api/User/UpdateUserDetail', JSON.stringify(this.user.applicationUserDetail), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.logout = function () {
        this.router.navigate(['/login']);
        this.user = undefined;
        ng2_cookies_1.Cookie.delete('AUID');
        this.change(false);
    };
    ;
    UserService.prototype.login = function (user) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var res = rxjs_1.Observable.create(function (obs) {
            _this.http.post('/api/User/Login', JSON.stringify(user), {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (result) {
                if (result !== undefined && result.applicationUserId > 0) {
                    _this.user = result;
                    _this.userId = result.applicationUserId;
                    ng2_cookies_1.Cookie.set('AUID', _this.userId.toString(), 30);
                    _this.change(true);
                    obs.next(_this.userId);
                    obs.complete();
                }
                else {
                    _this.router.navigate(['/login']);
                    _this.user = undefined;
                    ng2_cookies_1.Cookie.delete('AUID');
                    _this.change(false);
                    obs.next(_this.userId);
                    obs.complete();
                }
            });
        });
        return res;
    };
    ;
    UserService.prototype.saveLoginTime = function (fromCheck) {
        var continueSave = false;
        if (fromCheck) {
            var d = new Date();
            d.setDate(d.getDate() - 1);
            if (new Date(this.user.lastLoggedInDt) < d) {
                continueSave = true;
            }
        }
        else {
            continueSave = true;
        }
        if (continueSave) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            return this.http.post('/api/User/UpdateTime', JSON.stringify(this.user), {
                headers: headers
            })
                .map(function (res) { return res.json(); });
        }
        else {
            return rxjs_1.Observable.empty();
        }
    };
    UserService.prototype.checkLogin = function (url) {
        var _this = this;
        var res = rxjs_1.Observable.create(function (obs) {
            var myCookie = ng2_cookies_1.Cookie.get('AUID');
            if (myCookie !== null && myCookie !== undefined) {
                _this.getUser(myCookie)
                    .subscribe(function (res) {
                    _this.user = res;
                    _this.userId = res.applicationUserId;
                    _this.change(true);
                    _this.saveLoginTime(true).subscribe(function (x) {
                        var result = x;
                    });
                    obs.next(_this.isLoggedIn);
                    obs.complete();
                });
            }
            else {
                obs.next(_this.isLoggedIn);
                obs.complete();
                _this.router.navigate(['/login', url.substring(1)]);
            }
        });
        return res;
    };
    ;
    UserService.prototype.change = function (login) {
        this.isLoggedIn = login;
        this.userObjectChange.next(this.user);
        this.userChange.next(this.userId);
        this.stateChange.next(this.isLoggedIn);
        this.userListObjectChange.next(this.userList);
    };
    return UserService;
}());
__decorate([
    core_2.ViewChild('loginModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], UserService.prototype, "loginModal", void 0);
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, setting_service_1.SettingService, router_2.ActivatedRoute])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map