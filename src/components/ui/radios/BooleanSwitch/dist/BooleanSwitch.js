"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BooleanSwitchItem_1 = require("../BooleanSwitchItem/BooleanSwitchItem");
var BooleanSwitch_module_scss_1 = require("./BooleanSwitch.module.scss");
var BooleanSwitch = function (_a) {
    var switchItems = _a.switchItems, emitValue = _a.emitValue, currentValue = _a.currentValue;
    var onChangeRadio = function (value) {
        emitValue(value);
    };
    return (react_1["default"].createElement("div", { className: BooleanSwitch_module_scss_1["default"]["boolean-switch"] },
        react_1["default"].createElement("div", { className: BooleanSwitch_module_scss_1["default"]["boolean-switch__flex-container"] }, switchItems.map(function (item) { return (react_1["default"].createElement(BooleanSwitchItem_1["default"], { key: item.value, title: item.title, value: item.value, name: item.name, isActive: item.value === currentValue, emitValue: onChangeRadio })); }))));
};
exports["default"] = BooleanSwitch;
