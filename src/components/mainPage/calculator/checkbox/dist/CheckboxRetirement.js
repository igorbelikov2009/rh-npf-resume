"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Checkbox_1 = require("../../../ui/Checkbox/Checkbox");
var CheckboxRetirement = function (_a) {
    var earlyRretirement = _a.earlyRretirement, toogleChecked = _a.toogleChecked;
    return (react_1["default"].createElement(Checkbox_1["default"], { checkedValue: earlyRretirement, toogleChecked: toogleChecked, title: "\u0412\u044B\u0445\u043E\u0434 \u043D\u0430 \u043F\u0435\u043D\u0441\u0438\u044E \u0432 55/60 \u043B\u0435\u0442*" }));
};
exports["default"] = CheckboxRetirement;
