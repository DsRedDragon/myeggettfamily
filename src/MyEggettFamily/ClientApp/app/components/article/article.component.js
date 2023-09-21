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
var router_1 = require("@angular/router");
var ArticleComponent = (function () {
    function ArticleComponent(articleService, activatedRoute) {
        this.articleService = articleService;
        this.activatedRoute = activatedRoute;
        this.id = 0;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.id = param['id'];
        });
        if (this.id > 0) {
            this.articleService.getArticle(this.id)
                .subscribe(function (article) {
                _this.article = article;
            });
        }
    };
    return ArticleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "article", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "id", void 0);
ArticleComponent = __decorate([
    core_1.Component({
        selector: 'article-item',
        template: require('./article.component.html')
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService, router_1.ActivatedRoute])
], ArticleComponent);
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map