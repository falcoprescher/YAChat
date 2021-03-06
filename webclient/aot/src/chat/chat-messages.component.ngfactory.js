"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./chat-messages.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/common");
var i3 = require("../../../src/chat/chat-messages.component");
var i4 = require("../../../src/chat/chat.service");
var styles_ChatMessagesComponent = [i0.styles];
exports.RenderType_ChatMessagesComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_ChatMessagesComponent, data: {} });
function View_ChatMessagesComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 3, 'li', [], null, null, null, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef,
            i1.Renderer], { ngClass: [0, 'ngClass'] }, null), i1.ɵpod({ 'bold': 0 }),
        (_l()(), i1.ɵted(null, ['\n                ', ' [', ']: ', '\n            ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _ck(_v, 2, 0, (_v.context.$implicit.userid === _co.chatService.getChat().getCurrentUserId()));
        _ck(_v, 1, 0, currVal_0);
    }, function (_ck, _v) {
        var currVal_1 = _v.context.$implicit.username;
        var currVal_2 = _v.context.$implicit.userid;
        var currVal_3 = _v.context.$implicit.msg;
        _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3);
    });
}
function View_ChatMessagesComponent_0(_l) {
    return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { chatMessagesElementRef: 0 }), (_l()(), i1.ɵeld(0, [[1, 0], ['chatMessages', 1]], null, 10, 'div', [['class', 'chat-messages container']], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 7, 'div', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 4, 'ul', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n            '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChatMessagesComponent_1)),
        i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.chatService.getChat().messages;
        _ck(_v, 8, 0, currVal_0);
    }, null);
}
exports.View_ChatMessagesComponent_0 = View_ChatMessagesComponent_0;
function View_ChatMessagesComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'chat-messages', [], null, null, null, View_ChatMessagesComponent_0, exports.RenderType_ChatMessagesComponent)), i1.ɵdid(8503296, null, 0, i3.ChatMessagesComponent, [i4.ChatService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_ChatMessagesComponent_Host_0 = View_ChatMessagesComponent_Host_0;
exports.ChatMessagesComponentNgFactory = i1.ɵccf('chat-messages', i3.ChatMessagesComponent, View_ChatMessagesComponent_Host_0, {}, {}, []);
//# sourceMappingURL=chat-messages.component.ngfactory.js.map