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
var image_model_1 = require("../models/image.model");
var platform_browser_1 = require("@angular/platform-browser");
var setting_service_1 = require("../services/setting.service");
var ImageService = (function () {
    function ImageService(http, sanitizer, settingService) {
        var _this = this;
        this.http = http;
        this.sanitizer = sanitizer;
        this.settingService = settingService;
        this.images = [];
        this.files = [];
        this.header = new image_model_1.Image();
        this.imageUrl = '';
        this.imagesToDelete = [];
        this.imageChange = new rxjs_1.Subject();
        this.fbA = '';
        this.fbS = '';
        this.fbP = '';
        this.fbT = '';
        this.settingService.getSetting(1001).subscribe(function (result) {
            _this.fbA = result.settingValue;
            _this.settingService.getSetting(1002).subscribe(function (result) {
                _this.fbS = result.settingValue;
            });
            _this.settingService.getSetting(1003).subscribe(function (result) {
                _this.fbP = result.settingValue;
                hello()
                    .init({
                    facebook: _this.fbA
                }, { scope: 'publish_pages,manage_pages,user_photos' });
            });
        });
    }
    ImageService.prototype.deleteImages = function (articleId) {
        return this.http.get("/api/Image/GetImagesByArticleId?articleId=" + articleId)
            .map(function (res) { return res.json(); });
    };
    ImageService.prototype.getImagesByArticleId = function (articleId) {
        var _this = this;
        this.settingService.getSetting(1004).subscribe(function (result) {
            _this.fbT = result.settingValue;
            return _this.http.get("/api/Image/GetImagesByArticleId?articleId=" + articleId)
                .map(function (res) { return res.json(); }).subscribe(function (result) {
                _this.images = result;
                _this.change();
                _this.images.forEach(function (x) {
                    var now = new Date();
                    var pastDate = new Date();
                    if (x !== undefined) {
                        pastDate = new Date(x.urlRetrievalDate);
                        pastDate.setDate(pastDate.getDate() + 7);
                    }
                    if (pastDate < now) {
                        if (x.externalId !== null && x.isVideo) {
                            hello('facebook')
                                .api("/" + x.externalId, {
                                fields: 'source,thumbnails{uri}',
                                token: _this.fbT
                            })
                                .then(function (res) {
                                x.imageUrl = res.source;
                                x.thumbnailUrl = res.thumbnails.data[0].uri;
                                x.urlRetrievalDate = now;
                                _this.updateImage(x)
                                    .subscribe(function (r) {
                                    var index = _this.images.indexOf(x);
                                    _this.images.splice(index, 1, x);
                                    _this.change();
                                });
                            });
                        }
                        else {
                            if (x.externalId !== null && !x.isVideo) {
                                hello('facebook')
                                    .api("/" + x.externalId, {
                                    fields: 'source,album',
                                    token: _this.fbT
                                })
                                    .then(function (res) {
                                    x.imageUrl = res.source;
                                    x.externalAlbumId = res.album.id;
                                    x.urlRetrievalDate = now;
                                    _this.updateImage(x)
                                        .subscribe(function (r) {
                                        var index = _this.images.indexOf(x);
                                        _this.images.splice(index, 1, x);
                                        _this.change();
                                    });
                                });
                            }
                        }
                    }
                });
            });
        });
    };
    ImageService.prototype.sanitize = function (url) {
        var sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(url);
        return sanitizedUrl;
    };
    ImageService.prototype.onUpload = function (event, articleId) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files.push(file);
            var img = new image_model_1.Image();
            img.articleId = articleId;
            img.captionText = file.captionText;
            img.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
            img.thumbnailUrl = file.objectURL.changingThisBreaksApplicationSecurity;
            if (file.type.includes('video')) {
                img.isVideo = true;
            }
            else {
                img.isVideo = false;
            }
            this.insertImage(img);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'File Uploaded', detail: '' });
    };
    ImageService.prototype.onHeaderUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.header = file;
            this.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
        }
        this.headerMsgs = [];
        this.headerMsgs.push({ severity: 'success', summary: 'File Uploaded', detail: '' });
    };
    ImageService.prototype.deleteImage = function (imageId) {
        this.http.get("/api/Image/DeleteImage?imageId=" + imageId).map(function (res) { return res.json; }).subscribe(function (result) {
        });
    };
    ImageService.prototype.insertImage = function (image) {
        this.images.push(image);
        this.images = this.images;
    };
    ImageService.prototype.saveImage = function (image) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/Image/SaveImage', JSON.stringify(image), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    ImageService.prototype.updateImage = function (image) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/Image/UpdateImage', JSON.stringify(image), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    ImageService.prototype.change = function () {
        this.imageChange.next(this.images);
    };
    return ImageService;
}());
ImageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, platform_browser_1.DomSanitizer, setting_service_1.SettingService])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map