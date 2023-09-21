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
var router_1 = require("@angular/router");
var article_service_1 = require("../../services/article.service");
var ArticleContainerComponent = (function () {
    function ArticleContainerComponent(articleService, activatedRoute, router) {
        this.articleService = articleService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.id = 0;
        this.article = {};
    }
    ArticleContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.id = param['id'];
        });
        if (this.id > 0) {
            this.articleService.getArticle(this.id)
                .subscribe(function (article) {
                if (!article.visible) {
                    _this.router.navigate(['/home']);
                }
                _this.article = article;
            });
        }
    };
    return ArticleContainerComponent;
}());
ArticleContainerComponent = __decorate([
    core_1.Component({
        selector: 'article-container',
        template: require('./articlecontainer.component.html')
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService, router_1.ActivatedRoute, router_1.Router])
], ArticleContainerComponent);
exports.ArticleContainerComponent = ArticleContainerComponent;
//# sourceMappingURL=articlecontainer.component.js.map