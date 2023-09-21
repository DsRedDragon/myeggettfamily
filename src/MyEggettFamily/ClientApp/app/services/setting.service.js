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
var SettingService = (function () {
    function SettingService(http) {
        this.http = http;
    }
    SettingService.prototype.getSettings = function () {
        return this.http.get('/api/Setting/GetSettings')
            .map(function (result) { return result.json(); });
    };
    SettingService.prototype.getStates = function () {
        return this.http.get('/api/Setting/GetStates')
            .map(function (result) { return result.json(); });
    };
    SettingService.prototype.getCountries = function () {
        return this.http.get('/api/Setting/GetCountries')
            .map(function (result) { return result.json(); });
    };
    SettingService.prototype.getSetting = function (settingId) {
        return this.http.get("/api/Setting/GetSetting?settingId=" + settingId)
            .map(function (result) { return result.json(); });
    };
    SettingService.prototype.saveSettings = function (setting) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/Setting/UpdateSettings', JSON.stringify(setting), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    SettingService.prototype.saveSetting = function (setting) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/Setting/UpdateSetting', JSON.stringify(setting), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    return SettingService;
}());
SettingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SettingService);
exports.SettingService = SettingService;
//# sourceMappingURL=setting.service.js.map