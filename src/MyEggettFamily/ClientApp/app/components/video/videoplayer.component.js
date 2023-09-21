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
var VideoPlayerComponent = (function () {
    function VideoPlayerComponent(imageService) {
        this.imageService = imageService;
        this.sources = [];
    }
    VideoPlayerComponent.prototype.ngOnInit = function () {
        this.sources.push(this.image);
    };
    return VideoPlayerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "image", void 0);
VideoPlayerComponent = __decorate([
    core_1.Component({
        selector: 'video-player',
        template: require('./videoplayer.component.html')
    }),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], VideoPlayerComponent);
exports.VideoPlayerComponent = VideoPlayerComponent;
//# sourceMappingURL=videoplayer.component.js.map