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
var image_service_1 = require("../../services/image.service");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var setting_service_1 = require("../../services/setting.service");
var ArticleAdminListComponent = (function () {
    function ArticleAdminListComponent(articleService, imageService, settingService) {
        this.articleService = articleService;
        this.imageService = imageService;
        this.settingService = settingService;
        this.articles = [];
        this.activeOnly = false;
        this.title = 'Delete Article';
        this.message = 'Are you <b>sure</b> you want to delete this article?';
        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
        this.hiddenTitle = 'Show Article';
        this.hiddenMessage = 'Are you <b>sure</b> you want to make this article visible?';
        this.newTitle = 'Mark as Read';
        this.newMessage = 'Are you <b>sure</b> you want to mark this item as read?';
        this.readTitle = 'Mark as Unread';
        this.readMessage = 'Are you <b>sure</b> you want to mark this item as unread?';
        this.visibleTitle = 'Hide Article';
        this.visibleMessage = 'Are you <b>sure</b> you want to hide this article?';
        this.imagesToDelete = [];
        this.loaded = false;
        this.fbT = '';
    }
    ArticleAdminListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getArticlesList(this.activeOnly)
            .subscribe(function (articles) {
            _this.articles = articles;
            _this.loaded = true;
        });
        this.settingService.getSetting(1004).subscribe(function (result) {
            _this.fbT = result.settingValue;
        });
    };
    ArticleAdminListComponent.prototype.confirmClicked = function (article) {
        var _this = this;
        this.imageService.deleteImages(article.articleId)
            .subscribe(function (result) {
            _this.imagesToDelete = result;
            if (_this.imagesToDelete !== undefined) {
                _this.imagesToDelete.forEach(function (x) {
                    if (x.externalId !== null) {
                        hello('facebook')
                            .api("/" + x.externalId, 'delete', {
                            token: _this.fbT
                        })
                            .then(function (result) {
                        });
                    }
                    if (x.externalAlbumId !== null) {
                        hello('facebook')
                            .api("/" + x.externalAlbumId, 'delete', {
                            token: _this.fbT
                        })
                            .then(function (result) {
                        });
                    }
                });
            }
            _this.articleService.deleteArticle(article.articleId).subscribe(function (result) {
                var index = _this.articles.indexOf(article);
                _this.articles.splice(index, 1);
                _this.deleteModal.show();
            });
        });
    };
    ArticleAdminListComponent.prototype.showArticle = function (article) {
        var _this = this;
        article.visible = true;
        article.isNew = false;
        this.articleService.saveArticle(article)
            .subscribe(function (result) {
            article.isNew = true;
            _this.articleService.sendNotification(article).subscribe(function (x) {
                article.isNew = false;
            });
        });
    };
    ArticleAdminListComponent.prototype.hideArticle = function (article) {
        article.visible = false;
        this.articleService.saveArticle(article)
            .subscribe(function (result) {
        });
    };
    ArticleAdminListComponent.prototype.markRead = function (article) {
        article.isNew = false;
        this.articleService.saveArticle(article)
            .subscribe(function (result) {
        });
    };
    ArticleAdminListComponent.prototype.markUnRead = function (article) {
        article.isNew = true;
        this.articleService.saveArticle(article)
            .subscribe(function (result) {
        });
    };
    return ArticleAdminListComponent;
}());
__decorate([
    core_1.ViewChild('deleteModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ArticleAdminListComponent.prototype, "deleteModal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ArticleAdminListComponent.prototype, "activeOnly", void 0);
ArticleAdminListComponent = __decorate([
    core_1.Component({
        selector: 'article-admin-list',
        template: require('./articleadminlist.component.html')
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService, image_service_1.ImageService, setting_service_1.SettingService])
], ArticleAdminListComponent);
exports.ArticleAdminListComponent = ArticleAdminListComponent;
//# sourceMappingURL=articleadminlist.component.js.map