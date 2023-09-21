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
var setting_service_1 = require("../../services/setting.service");
var rxjs_1 = require("rxjs");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var appUser_model_1 = require("../../models/appUser.model");
var router_1 = require("@angular/router");
var appchild_model_1 = require("../../models/appchild.model");
var image_service_1 = require("../../services/image.service");
var applicationUserDetail_model_1 = require("../../models/applicationUserDetail.model");
var state_model_1 = require("../../models/state.model");
var country_model_1 = require("../../models/country.model");
var NewAccountComponent = (function () {
    function NewAccountComponent(userService, router, settingService, imageService, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.settingService = settingService;
        this.imageService = imageService;
        this.activatedRoute = activatedRoute;
        this.user = new appUser_model_1.AppUser();
        this.maxDate = new Date();
        this.states = [];
        this.countries = [];
        this.code = '';
        this.fbT = '';
        this.imageId = 0;
        this.fbA = '';
        this.fbS = '';
        this.fbP = '';
        this.imageUrl = '';
        this.success = false;
    }
    NewAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.applicationUserDetail = new applicationUserDetail_model_1.ApplicationUserDetail();
        this.user.applicationUserDetail.state = new state_model_1.State();
        this.user.applicationUserDetail.state.country = new country_model_1.Country();
        this.user.appChild = new Array();
        this.settingService.getCountries().subscribe(function (x) {
            _this.countries = x;
        });
        this.settingService.getStates().subscribe(function (x) {
            _this.states = x;
        });
        this.settingService.getSetting(1001).subscribe(function (result) {
            _this.fbA = result.settingValue;
        });
        this.settingService.getSetting(1002).subscribe(function (result) {
            _this.fbS = result.settingValue;
        });
        this.settingService.getSetting(1003).subscribe(function (result) {
            _this.fbP = result.settingValue;
        });
        hello()
            .init({
            facebook: this.fbA
        }, { scope: 'publish_pages,manage_pages,user_photos' });
    };
    NewAccountComponent.prototype.checkUsername = function (name, id) {
        var _this = this;
        this.userService.checkUsername(name, id).subscribe(function (x) {
            var result = x;
            if (result) {
                _this.usernameModal.show();
                _this.userService.user.username = '';
            }
            return result;
        });
    };
    NewAccountComponent.prototype.addChild = function () {
        var child = new appchild_model_1.AppChild();
        this.user.appChild.push(child);
    };
    NewAccountComponent.prototype.confirmClicked = function (child) {
        var index = this.user.appChild.indexOf(child);
        if (index !== -1) {
            this.user.appChild.splice(index, 1);
        }
    };
    NewAccountComponent.prototype.onHeaderUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.image = file;
            this.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
        }
    };
    NewAccountComponent.prototype.saveProfile = function (form) {
        var _this = this;
        var url;
        if (this.imageUrl !== '') {
            this.doSaveProfile('');
            var result = rxjs_1.Observable.create(function (obs) {
                _this.settingService.getSetting(1004).subscribe(function (result) {
                    _this.fbT = result.settingValue;
                    hello('facebook')
                        .api('/159267017952244/photos', 'post', {
                        file: _this.image,
                        token: _this.fbT
                    })
                        .then(function (result) {
                        _this.imageId = result.id;
                        hello('facebook')
                            .api('myeggettfamilypage/albums', {
                            "fields": 'photos{source}',
                            token: _this.fbT
                        })
                            .then(function (res) {
                            res.data.forEach(function (x) {
                                if (x.id === '159267017952244') {
                                    x.photos.data.forEach(function (y) {
                                        if (y.id === _this.imageId) {
                                            url = _this.imageService.sanitize(y.source);
                                            _this.doSaveProfile(url).subscribe(function (x) {
                                                obs.next(url);
                                                obs.complete;
                                            });
                                        }
                                    });
                                }
                            });
                        });
                    });
                });
            });
            result.subscribe(function (x) {
                if (_this.success) {
                    _this.profileModal.show();
                }
                else {
                    _this.failModal.show();
                }
            });
        }
        else {
            this.doSaveProfile('').subscribe(function (x) {
                if (_this.success) {
                    _this.profileModal.show();
                }
                else {
                    _this.failModal.show();
                }
            });
        }
        return false;
    };
    NewAccountComponent.prototype.dismissModal = function () {
        this.router.navigate(['/login']);
    };
    NewAccountComponent.prototype.doSaveProfile = function (url) {
        var _this = this;
        if (url !== '') {
            this.user.applicationUserDetail.imageUrl = url.changingThisBreaksApplicationSecurity;
        }
        var result = rxjs_1.Observable.create(function (obs) {
            _this.userService.saveProfile(_this.user, _this.code).subscribe(function (res) {
                _this.user = res;
                if (_this.user.applicationUserId > 0) {
                    _this.success = true;
                }
                if (_this.user.applicationUserDetail.birthday !== null && _this.user.applicationUserDetail.birthday !== undefined) {
                    _this.user.applicationUserDetail.birthday = new Date(_this.user.applicationUserDetail.birthday);
                }
                if (_this.user.applicationUserDetail.spouseBirthday !== null && _this.user.applicationUserDetail.spouseBirthday !== undefined) {
                    _this.user.applicationUserDetail.spouseBirthday = new Date(_this.user.applicationUserDetail.spouseBirthday);
                }
                _this.user.appChild.forEach(function (x) {
                    if (x.birthday !== undefined && x.birthday !== null) {
                        x.birthday = new Date(x.birthday);
                    }
                });
                obs.next(_this.user);
                obs.complete;
            });
        });
        return result;
    };
    return NewAccountComponent;
}());
__decorate([
    core_1.ViewChild('profileModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], NewAccountComponent.prototype, "profileModal", void 0);
__decorate([
    core_1.ViewChild('loginModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], NewAccountComponent.prototype, "loginModal", void 0);
__decorate([
    core_1.ViewChild('failModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], NewAccountComponent.prototype, "failModal", void 0);
__decorate([
    core_1.ViewChild('usernameModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], NewAccountComponent.prototype, "usernameModal", void 0);
NewAccountComponent = __decorate([
    core_1.Component({
        selector: 'newaccount',
        template: require('./newaccount.component.html')
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, setting_service_1.SettingService, image_service_1.ImageService, router_1.ActivatedRoute])
], NewAccountComponent);
exports.NewAccountComponent = NewAccountComponent;
//# sourceMappingURL=newaccount.component.js.map