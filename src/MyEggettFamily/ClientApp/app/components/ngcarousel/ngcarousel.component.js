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
var image_service_1 = require("../../services/image.service");
var router_1 = require("@angular/router");
var NGCarouselComponent = (function () {
    function NGCarouselComponent(imageService, activatedRoute) {
        this.imageService = imageService;
        this.activatedRoute = activatedRoute;
        this.images = [];
        this.id = 0;
        this.imagesLoaded = false;
    }
    NGCarouselComponent.prototype.ngOnDestroy = function () {
        this.imageSubscription.unsubscribe();
    };
    NGCarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id == undefined) {
            this.activatedRoute.params.subscribe(function (param) {
                _this.id = param['id'];
            });
        }
        if (this.id > 0) {
            this.imageService.getImagesByArticleId(this.id);
            this.imagesLoaded = true;
        }
        this.images = this.imageService.images;
        this.imageSubscription = this.imageService.imageChange.subscribe(function (value) {
            _this.images = value;
            _this.imagesLoaded = true;
        });
    };
    return NGCarouselComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NGCarouselComponent.prototype, "id", void 0);
NGCarouselComponent = __decorate([
    core_1.Component({
        selector: 'ng-carousel',
        template: require('./ngcarousel.component.html'),
        providers: [image_service_1.ImageService]
    }),
    __metadata("design:paramtypes", [image_service_1.ImageService, router_1.ActivatedRoute])
], NGCarouselComponent);
exports.NGCarouselComponent = NGCarouselComponent;
//# sourceMappingURL=ngcarousel.component.js.map