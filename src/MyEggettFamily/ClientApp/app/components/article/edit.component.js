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
var article_service_1 = require("../../services/article.service");
var user_service_1 = require("../../services/user.service");
var image_service_1 = require("../../services/image.service");
var setting_service_1 = require("../../services/setting.service");
var rxjs_1 = require("rxjs");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var image_model_1 = require("../../models/image.model");
var articledetail_model_1 = require("../../models/articledetail.model");
var ng2_facebook_sdk_1 = require("ng2-facebook-sdk");
var ArticleEditComponent = (function () {
    function ArticleEditComponent(articleService, router, userService, fb, activatedRoute, imageService, settingService) {
        this.articleService = articleService;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.imageService = imageService;
        this.settingService = settingService;
        this.id = 0;
        this.article = new articledetail_model_1.ArticleDetail();
        //accessToken = '';
        this.albumId = '';
        this.imageCount = 0;
        this.fbA = '';
        this.fbS = '';
        this.fbP = '';
        this.fbT = '';
        this.currentState = 'Edit';
        this.isNew = false;
        this.isLoggedIn = false;
        this.images = [];
        this.myImages = [];
        this.imageDetails = [];
        this.imagestoDelete = [];
        this.notifyUsers = [];
        this.maxDate = new Date();
    }
    ArticleEditComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
        this.imageSubscription.unsubscribe();
    };
    ArticleEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.checkLogin(window.location.pathname)
            .subscribe(function (res) {
            _this.settingService.getSetting(1001)
                .subscribe(function (result) {
                _this.fbA = result.settingValue;
                var fbParams = {
                    appId: _this.fbA,
                    xfbml: true,
                    version: 'v2.8'
                };
                _this.fb.init(fbParams);
                hello()
                    .init({
                    facebook: _this.fbA
                }, { scope: 'publish_pages,manage_pages,user_photos' });
                _this.settingService.getSetting(1002)
                    .subscribe(function (result) {
                    _this.fbS = result.settingValue;
                    _this.settingService.getSetting(1003)
                        .subscribe(function (result) {
                        _this.fbP = result.settingValue;
                        _this.settingService.getSetting(1004)
                            .subscribe(function (result) {
                            _this.fbT = result.settingValue;
                        });
                    });
                });
            });
            _this.user = _this.userService.user;
            _this.isLoggedIn = true;
            _this.userSubscription = _this.userService.userObjectChange.subscribe(function (value) {
                _this.user = value;
            });
            _this.activatedRoute.params.subscribe(function (param) {
                _this.id = param['id'];
            });
            if (_this.id > 0) {
                _this.articleService.getArticle(_this.id)
                    .subscribe(function (article) {
                    _this.article = article;
                });
                _this.imageService.getImagesByArticleId(_this.id);
            }
            else {
                _this.imageService.images = [];
                _this.currentState = 'New';
                _this.isNew = true;
                _this.article.authorName = _this.user.firstName + ' ' + _this.user.lastName;
                _this.article.postedDT = new Date();
                _this.article.applicationUserId = _this.user.applicationUserId;
                _this.article.isNew = true;
                _this.article.title = '';
                _this.article.articleContent = '';
            }
            _this.images = _this.imageService.images;
            _this.imageSubscription = _this.imageService.imageChange.subscribe(function (value) {
                _this.images = value;
                if (_this.images !== null) {
                    _this.images.forEach(function (image) {
                        if (image.externalAlbumId !== null) {
                            _this.albumId = image.externalAlbumId;
                        }
                    });
                }
            });
        });
    };
    //ngAfterViewInit() {
    //    if (!this.isLoggedIn) {
    //        if (this.loginModal !== undefined)
    //            this.loginModal.show();
    //    }
    //}
    ArticleEditComponent.prototype.dismissModal = function () {
        this.router.navigate(["/edit/" + this.article.articleId]);
    };
    ArticleEditComponent.prototype.dismissLoginModal = function () {
        this.router.navigate(['/home']);
    };
    ArticleEditComponent.prototype.toggleVisibility = function () {
        this.article.visible = !this.article.visible;
    };
    ArticleEditComponent.prototype.toggleArchived = function () {
        this.article.archived = !this.article.archived;
    };
    ArticleEditComponent.prototype.sendNotification = function () {
        this.fb.ui({
            method: 'feed',
            link: "http://www.myeggettfamily.com/view/" + this.article.articleId,
            quote: "My Eggett Family has updated the article called: " + this.article.title,
            from: this.fbP
        });
        this.articleService.sendNotification(this.article).subscribe(function (x) {
        });
    };
    ArticleEditComponent.prototype.deleteImage = function (image) {
        this.imagestoDelete.push(image);
        var index2 = this.imageService.images.indexOf(image);
        this.imageService.images.splice(index2, 1);
        var index = this.myImages.indexOf(image);
        this.myImages.splice(index, 1);
        var index1 = this.imageService.files.indexOf(image);
        this.imageService.files.splice(index1, 1);
    };
    ArticleEditComponent.prototype.saveProfile = function (form) {
        var _this = this;
        this.savingModal.show();
        hello()
            .init({
            facebook: this.fbA
        }, { scope: 'publish_pages,manage_pages,user_photos' });
        if (form.imagesToDelete !== undefined) {
            form.imagesToDelete.forEach(function (x) {
                if (x.imageId > 0) {
                    hello('facebook')
                        .api("/" + x.externalId, 'delete', {
                        token: _this.fbT
                    })
                        .then(function (result) {
                    });
                    _this.imageService.deleteImage(x.imageId);
                }
            });
        }
        this.article.title = form.title;
        this.article.archived = form.archived;
        this.article.articleContent = form.articleContent;
        this.article.visible = form.visible;
        this.myImages = form.images;
        this.albumId = form.albumId;
        this.imageDetails = form.imageDetails;
        this.imagestoDelete = form.imagestoDelete;
        this.articleService.saveArticle(this.article)
            .subscribe(function (res) {
            _this.article = res;
            _this.imageDetails.forEach(function (x) {
                if (x.imageId !== undefined) {
                    _this.imageService.updateImage(x)
                        .subscribe(function (r) {
                    });
                }
            });
        });
        var res = rxjs_1.Observable.create(function (obs) {
            if (form.images.length > 0) {
                if (form.albumId === '') {
                    hello('facebook')
                        .api("/" + _this.fbP + "/albums", 'post', {
                        name: form.title,
                        token: _this.fbT
                    })
                        .then(function (result) {
                        _this.albumId = result.id;
                        obs.next(_this.albumId);
                        obs.complete();
                    });
                }
                else {
                    _this.albumId = form.albumId;
                    obs.next(_this.albumId);
                    obs.complete();
                }
            }
            else {
                obs.next(_this.albumId);
                obs.complete();
            }
        });
        res.subscribe(function (x) {
            var count = 0;
            if (_this.myImages.length > 0) {
                var r = rxjs_1.Observable.create(function (observer) {
                    for (var i = 0; i < _this.myImages.length; i++) {
                        _this.currentImage = _this.myImages[i];
                        if (_this.currentImage.type.includes('video')) {
                            hello('facebook')
                                .api("/" + _this.fbP + "/videos", 'post', {
                                file: _this.currentImage,
                                token: _this.fbT
                            })
                                .then(function (result) {
                                hello('facebook')
                                    .api("/" + result.id, {
                                    "fields": 'source',
                                    token: _this.fbT
                                })
                                    .then(function (res) {
                                    var img = new image_model_1.Image();
                                    img.articleId = _this.article.articleId;
                                    img.captionText = _this.currentImage.captionText;
                                    img.externalAlbumId = _this.albumId;
                                    img.imageUrl = res.source;
                                    img.externalId = res.id;
                                    img.isVideo = true;
                                    _this.imageService.saveImage(img)
                                        .subscribe(function (resu) {
                                        count++;
                                        if (count >= _this.myImages.length) {
                                            observer.next(count);
                                            observer.complete();
                                        }
                                    });
                                });
                            });
                        }
                        else {
                            hello('facebook')
                                .api("/" + _this.albumId + "/photos", 'post', {
                                file: _this.currentImage,
                                token: _this.fbT
                            })
                                .then(function (result) {
                                hello('facebook')
                                    .api("/" + result.id, {
                                    "fields": 'source',
                                    token: _this.fbT
                                })
                                    .then(function (res) {
                                    var img = new image_model_1.Image();
                                    img.articleId = _this.article.articleId;
                                    img.captionText = _this.currentImage.captionText;
                                    img.externalAlbumId = _this.albumId;
                                    img.externalId = res.id;
                                    img.imageUrl = res.source;
                                    img.isVideo = false;
                                    _this.imageService.saveImage(img)
                                        .subscribe(function (resu) {
                                        count++;
                                        if (count >= _this.myImages.length) {
                                            observer.next(count);
                                            observer.complete();
                                        }
                                    });
                                });
                            });
                        }
                    }
                });
                r.subscribe(function (result) {
                    _this.imageService.images = _this.imageDetails;
                    _this.imageService.files = [];
                    _this.imagestoDelete = [];
                    _this.savingModal.hide();
                    _this.articleModal.show();
                    if (_this.article.isNew && _this.article.visible) {
                        //this.fb.ui({
                        //    method: 'feed',
                        //    link: `http://www.myeggettfamily.com/view/${this.article.articleId}`,
                        //    quote: `My Eggett Family has added the article called: ${this.article.title}`,
                        //    from: this.fbP
                        //});
                        _this.articleService.sendNotification(_this.article)
                            .subscribe(function (x) {
                            var blah = x;
                        });
                    }
                    if (_this.article.isNew && !_this.userService.user.isAdmin) {
                        _this.articleService.sendSubmittedNotification(_this.article)
                            .subscribe(function (x) {
                            var blah = x;
                        });
                    }
                });
            }
            else {
                _this.imageService.images = _this.imageDetails;
                _this.imageService.files = [];
                _this.imagestoDelete = [];
                _this.savingModal.hide();
                _this.articleModal.show();
                if (_this.article.isNew && _this.article.visible) {
                    //this.fb.ui({
                    //    method: 'feed',
                    //    link: `http://www.myeggettfamily.com/view/${this.article.articleId}`,
                    //    quote: `My Eggett Family has added the article called: ${this.article.title}`,
                    //    from: this.fbP
                    //});
                    _this.articleService.sendNotification(_this.article)
                        .subscribe(function (x) {
                        var blah = x;
                    });
                }
                if (_this.article.isNew && !_this.userService.user.isAdmin) {
                    _this.articleService.sendSubmittedNotification(_this.article)
                        .subscribe(function (x) {
                        var blah = x;
                    });
                }
            }
        });
        return false;
    };
    return ArticleEditComponent;
}());
__decorate([
    core_1.ViewChild('articleModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ArticleEditComponent.prototype, "articleModal", void 0);
__decorate([
    core_1.ViewChild('savingModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ArticleEditComponent.prototype, "savingModal", void 0);
__decorate([
    core_1.ViewChild('loginModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ArticleEditComponent.prototype, "loginModal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ArticleEditComponent.prototype, "id", void 0);
ArticleEditComponent = __decorate([
    core_1.Component({
        selector: 'article-edit',
        template: require('./edit.component.html')
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService, router_1.Router, user_service_1.UserService, ng2_facebook_sdk_1.FacebookService, router_1.ActivatedRoute, image_service_1.ImageService, setting_service_1.SettingService])
], ArticleEditComponent);
exports.ArticleEditComponent = ArticleEditComponent;
//# sourceMappingURL=edit.component.js.map