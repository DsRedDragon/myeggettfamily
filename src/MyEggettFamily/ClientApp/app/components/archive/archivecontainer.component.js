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
var ArchiveContainerComponent = (function () {
    function ArchiveContainerComponent(articleService, activatedRoute) {
        this.articleService = articleService;
        this.activatedRoute = activatedRoute;
        this.articles = [];
    }
    ArchiveContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articles = [];
        this.activatedRoute.params.subscribe(function (param) {
            _this.date = param['date'];
            _this.title = param['title'];
        });
        if (this.date != undefined) {
            this.articleService.getArchivesByMonth(this.date)
                .subscribe(function (articles) {
                _this.articles = articles;
            });
        }
    };
    return ArchiveContainerComponent;
}());
ArchiveContainerComponent = __decorate([
    core_1.Component({
        selector: 'archive-container',
        template: require('./archivecontainer.component.html'),
        providers: [article_service_1.ArticleService]
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService, router_1.ActivatedRoute])
], ArchiveContainerComponent);
exports.ArchiveContainerComponent = ArchiveContainerComponent;
//# sourceMappingURL=archivecontainer.component.js.map