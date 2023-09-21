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
require("rxjs");
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get('/api/Article/GetArticles')
            .map(function (result) { return result.json(); });
    };
    ArticleService.prototype.deleteArticle = function (articleId) {
        return this.http.get("/api/Article/DeleteArticle?articleId=" + articleId).map(function (res) { return res.json; });
    };
    ArticleService.prototype.getArticlesList = function (activeOnly) {
        return this.http.get("/api/Article/GetArticlesList?activeOnly=" + activeOnly)
            .map(function (result) { return result.json(); });
    };
    ArticleService.prototype.getArticle = function (articleId) {
        return this.http.get("/api/Article/GetArticle?articleId=" + articleId)
            .map(function (result) { return result.json(); });
    };
    ArticleService.prototype.getArchiveList = function () {
        return this.http.get("/api/Article/GetArchiveList")
            .map(function (result) { return result.json(); });
    };
    ArticleService.prototype.getArchivesByMonth = function (id) {
        return this.http.get("/api/Article/GetArchivesByMonth?start=" + id)
            .map(function (result) { return result.json(); });
    };
    ArticleService.prototype.saveArticle = function (article) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/Article/UpdateArticle', JSON.stringify(article), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    ArticleService.prototype.sendNotification = function (article) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/Article/SendNotification', JSON.stringify(article), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    ArticleService.prototype.sendSubmittedNotification = function (article) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/Article/SendSubmittedNotification', JSON.stringify(article), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    return ArticleService;
}());
ArticleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map