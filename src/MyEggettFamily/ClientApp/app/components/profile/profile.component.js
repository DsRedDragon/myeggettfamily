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
var ProfileComponent = (function () {
    function ProfileComponent(userService, router, settingService, imageService, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.settingService = settingService;
        this.imageService = imageService;
        this.activatedRoute = activatedRoute;
        this.id = 0;
        this.user = new appUser_model_1.AppUser();
        this.maxDate = new Date();
        this.states = [];
        this.countries = [];
        this.originalUser = new appUser_model_1.AppUser();
        this.fbT = '';
        this.imageId = 0;
        this.fbA = '';
        this.fbS = '';
        this.fbP = '';
        this.imageUrl = '';
        this.success = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.checkLogin(window.location.pathname)
            .subscribe(function (res) {
            if (_this.userService.isLoggedIn) {
                _this.user = _this.activatedRoute.snapshot.data['profile'];
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
                _this.settingService.getCountries().subscribe(function (x) {
                    _this.countries = x;
                });
                _this.settingService.getStates().subscribe(function (x) {
                    _this.states = x;
                });
                _this.settingService.getSetting(1001).subscribe(function (result) {
                    _this.fbA = result.settingValue;
                });
                _this.settingService.getSetting(1002).subscribe(function (result) {
                    _this.fbS = result.settingValue;
                });
                _this.settingService.getSetting(1003).subscribe(function (result) {
                    _this.fbP = result.settingValue;
                });
                hello()
                    .init({
                    facebook: _this.fbA
                }, { scope: 'publish_pages,manage_pages,user_photos' });
            }
        });
    };
    ProfileComponent.prototype.checkUsername = function (name, id) {
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
    ProfileComponent.prototype.addChild = function () {
        var child = new appchild_model_1.AppChild();
        this.user.appChild.push(child);
    };
    ProfileComponent.prototype.confirmClicked = function (child) {
        var index = this.user.appChild.indexOf(child);
        if (index !== -1) {
            this.user.appChild.splice(index, 1);
        }
    };
    ProfileComponent.prototype.toggleEdit = function (editMode) {
        this.editMode = editMode;
        if (editMode) {
            Object.assign(this.originalUser, this.user);
        }
        else {
            Object.assign(this.user, this.originalUser);
            this.image = {};
            this.imageUrl = '';
        }
    };
    ProfileComponent.prototype.onHeaderUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.image = file;
            this.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
        }
    };
    ProfileComponent.prototype.saveProfile = function (form) {
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
                    _this.editMode = false;
                }
                //else {
                //    this.failModal.show();
                //}
            });
        }
        else {
            this.doSaveProfile('').subscribe(function (x) {
                if (_this.success) {
                    _this.profileModal.show();
                    _this.editMode = false;
                }
                //else {
                //    this.failModal.show();
                //}
            });
        }
        return false;
    };
    //saveProfile(form: any) {
    //    var url;
    //    if (this.imageUrl !== '') {
    //        this.doSaveProfile('');
    //        var result = Observable.create(obs => {
    //            this.settingService.getSetting(1004).subscribe(result => {
    //                this.fbT = result.settingValue;
    //                hello('facebook')
    //                    .api('/159267017952244/photos',
    //                    'post',
    //                    {
    //                        file: this.image,
    //                        token: this.fbT
    //                    })
    //                    .then(result => {
    //                        this.imageId = result.id;
    //                        hello('facebook')
    //                            .api('myeggettfamilypage/albums',
    //                            {
    //                                "fields": 'photos{source}',
    //                                token: this.fbT
    //                            }
    //                            )
    //                            .then(res => {
    //                                res.data.forEach(x => {
    //                                    if (x.id === '159267017952244') {
    //                                        x.photos.data.forEach(y => {
    //                                            if (y.id === this.imageId) {
    //                                                url = this.imageService.sanitize(y.source);
    //                                                this.doSaveProfile(url);
    //                                                obs.next(url);
    //                                                obs.complete;
    //                                            }
    //                                        });
    //                                    }
    //                                });
    //                            });
    //                    });
    //            });
    //        });
    //        result.subscribe(x => {
    //            this.profileModal.show();
    //            this.editMode = false;
    //        });
    //    }
    //    else
    //    {
    //        this.doSaveProfile('');
    //    }
    //    return false;
    //}
    ProfileComponent.prototype.doSaveProfile = function (url) {
        var _this = this;
        if (url !== '') {
            this.user.applicationUserDetail.imageUrl = url.changingThisBreaksApplicationSecurity;
        }
        var result = rxjs_1.Observable.create(function (obs) {
            _this.userService.saveProfile(_this.user, '').subscribe(function (res) {
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
    return ProfileComponent;
}());
__decorate([
    core_1.ViewChild('profileModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ProfileComponent.prototype, "profileModal", void 0);
__decorate([
    core_1.ViewChild('loginModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ProfileComponent.prototype, "loginModal", void 0);
__decorate([
    core_1.ViewChild('usernameModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ProfileComponent.prototype, "usernameModal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "id", void 0);
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        template: require('./profile.component.html')
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, setting_service_1.SettingService, image_service_1.ImageService, router_1.ActivatedRoute])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map