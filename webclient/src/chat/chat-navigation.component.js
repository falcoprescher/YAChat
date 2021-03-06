"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("zone.js");
require("reflect-metadata");
var ChatNavigationComponent = (function () {
    function ChatNavigationComponent() {
        this.title = 'ChatNavigation';
    }
    ChatNavigationComponent = __decorate([
        core_1.Component({
            selector: 'chat-navigation',
            templateUrl: "chat-navigation.component.html",
            styleUrls: ['chat-navigation.component.css']
        })
    ], ChatNavigationComponent);
    return ChatNavigationComponent;
}());
exports.ChatNavigationComponent = ChatNavigationComponent;
//# sourceMappingURL=chat-navigation.component.js.map