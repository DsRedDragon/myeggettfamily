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
var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.getComments = function (articleId) {
        return this.http.get("/api/Comment/GetComments?articleId=" + articleId)
            .map(function (result) { return result.json(); });
    };
    CommentService.prototype.getCommentsAdmin = function () {
        return this.http.get('/api/Comment/GetCommentsAdmin')
            .map(function (result) { return result.json(); });
    };
    CommentService.prototype.getSuggestionViews = function (userId) {
        return this.http.get("/api/Comment/GetSuggestionViews?userId=" + userId)
            .map(function (result) { return result.json(); });
    };
    CommentService.prototype.saveComment = function (comment) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/Comment/SaveComment', JSON.stringify(comment), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.updateComment = function (comment) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/Comment/UpdateComment', JSON.stringify(comment), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.deleteComment = function (commentId) {
        return this.http.get("/api/Comment/DeleteComment?commentId=" + commentId).map(function (res) { return res.json; });
    };
    CommentService.prototype.updateSuggestion = function (feedback) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/Comment/UpdateSuggestion', JSON.stringify(feedback), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.deleteSuggestion = function (feedbackId) {
        return this.http.get("/api/Comment/DeleteSuggestion?suggestionId=" + feedbackId).map(function (res) { return res.json; });
    };
    CommentService.prototype.getSuggestionTypes = function () {
        return this.http.get('/api/Comment/GetSuggestionTypes').map(function (res) { return res.json(); });
    };
    CommentService.prototype.insertFeedback = function (feedback) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/Comment/InsertSuggestion', JSON.stringify(feedback), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    return CommentService;
}());
CommentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map