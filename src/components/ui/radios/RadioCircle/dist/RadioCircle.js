"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioCircleItem_1 = require("../RadioCircleItem/RadioCircleItem");
var RadioCircle_module_scss_1 = require("./RadioCircle.module.scss");
var RadioCircle = function (_a) {
    var optionsItems = _a.optionsItems, currentValue = _a.currentValue, emitValue = _a.emitValue;
    var onChangeRadio = function (value) {
        emitValue(value);
    };
    return (react_1["default"].createElement("div", { className: RadioCircle_module_scss_1["default"]["radio-circle"] },
        react_1["default"].createElement("div", { className: RadioCircle_module_scss_1["default"]["radio-circle__items-container"] }, optionsItems.map(function (item) { return (react_1["default"].createElement(RadioCircleItem_1["default"], { key: item.value, value: item.value, title: item.title, emitValue: onChangeRadio, isActive: item.value === currentValue })); }))));
};
exports["default"] = RadioCircle;
