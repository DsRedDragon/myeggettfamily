"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var DatePipe = (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (date, args, transform) {
        if (transform === void 0) { transform = true; }
        if (date !== null && date !== undefined) {
            var d = new Date(date);
            if (transform) {
                d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
                return moment(d).format(args);
            }
            else {
                return moment(d).format(args);
            }
        }
        else {
            return null;
        }
    };
    return DatePipe;
}());
DatePipe = __decorate([
    core_1.Pipe({
        name: 'formatDate'
    })
], DatePipe);
exports.DatePipe = DatePipe;
//# sourceMappingURL=formatDate.pipe.js.map