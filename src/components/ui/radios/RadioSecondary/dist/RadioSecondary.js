"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioSecondaryLabel_1 = require("../RadioSecondaryLabel/RadioSecondaryLabel");
var RadioSecondary_module_scss_1 = require("./RadioSecondary.module.scss");
var RadioSecondary = function (_a) {
    var optionsItems = _a.optionsItems, emitValue = _a.emitValue, currentValue = _a.currentValue;
    var _b = react_1.useState(currentValue), valueRadio = _b[0], setValueRadio = _b[1];
    var onChangeRadio = function (value) {
        setValueRadio(value);
        emitValue(value);
    };
    return (react_1["default"].createElement("div", { className: RadioSecondary_module_scss_1["default"]["radio-secondary"] }, optionsItems.map(function (item) { return (react_1["default"].createElement(RadioSecondaryLabel_1["default"], { key: item.value, title: item.title, value: item.value, name: item.name, isActive: item.value === valueRadio, emitValue: onChangeRadio })); })));
};
exports["default"] = RadioSecondary;
