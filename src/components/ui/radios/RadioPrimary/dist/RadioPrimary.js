"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioPrimaryLabel_1 = require("../RadioPrimaryLabel/RadioPrimaryLabel");
var RadioPrimary_module_scss_1 = require("./RadioPrimary.module.scss");
var RadioPrimary = function (_a) {
    var optionsItems = _a.optionsItems, currentValue = _a.currentValue, emitValue = _a.emitValue;
    var _b = react_1.useState(currentValue), valueRadio = _b[0], setValueRadio = _b[1];
    var onChangeRadio = function (value) {
        setValueRadio(value);
        if (valueRadio) {
            emitValue(value);
        }
    };
    return (react_1["default"].createElement("div", { className: RadioPrimary_module_scss_1["default"]["radio-primary"] },
        react_1["default"].createElement("div", { className: RadioPrimary_module_scss_1["default"]["radio-primary__flex-container"] }, optionsItems.map(function (item) { return (react_1["default"].createElement(RadioPrimaryLabel_1["default"], { key: item.value, title: item.title, value: item.value, name: item.name, isActive: item.value === valueRadio, emitValue: onChangeRadio })); }))));
};
exports["default"] = RadioPrimary;
