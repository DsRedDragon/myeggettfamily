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
var ArchiveRedirectComponent = (function () {
    function ArchiveRedirectComponent(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (param) {
            _this.date = param['date'];
            _this.title = param['title'];
        });
        this.router.navigate(["/archive", { date: this.date, title: this.title }]);
    }
    return ArchiveRedirectComponent;
}());
ArchiveRedirectComponent = __decorate([
    core_1.Component({
        selector: 'archiveredirect',
        template: '<div></div>'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], ArchiveRedirectComponent);
exports.ArchiveRedirectComponent = ArchiveRedirectComponent;
//# sourceMappingURL=archiveredirect.component.js.map