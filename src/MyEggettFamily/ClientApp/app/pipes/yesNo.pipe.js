"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BooleanPipe = (function () {
    function BooleanPipe() {
    }
    BooleanPipe.prototype.transform = function (boolean, type) {
        var result = '';
        if (type === 'yesNo') {
            result = boolean ? 'Yes' : 'No';
        }
        if (type === 'approved') {
            result = boolean ? 'Approved' : 'Un-Approved';
        }
        if (type === 'readUnread') {
            result = boolean ? 'Unread' : 'Read';
        }
        if (type === 'visible') {
            result = boolean ? 'Visible' : 'Hidden';
        }
        if (type === 'admin') {
            result = boolean ? 'Admin' : 'Non-Admin';
        }
        if (type === 'sysAdmin') {
            result = boolean ? 'System Admin' : 'Non-System Admin';
        }
        if (type === 'notification') {
            result = boolean ? 'Gets Notified' : 'Does not get Notified';
        }
        return result;
    };
    return BooleanPipe;
}());
BooleanPipe = __decorate([
    core_1.Pipe({
        name: 'yesNo'
    })
], BooleanPipe);
exports.BooleanPipe = BooleanPipe;
//# sourceMappingURL=yesNo.pipe.js.map