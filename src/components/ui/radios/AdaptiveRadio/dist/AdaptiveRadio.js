"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AdaptiveRadioItem_1 = require("../AdaptiveRadioItem/AdaptiveRadioItem");
var AdaptiveRadio_module_scss_1 = require("./AdaptiveRadio.module.scss");
var AdaptiveRadio = function (_a) {
    var optionsItems = _a.optionsItems, currentValue = _a.currentValue, emitValue = _a.emitValue;
    var onChangeRadio = function (value, id) {
        emitValue(value, id);
    };
    return (react_1["default"].createElement("div", { className: AdaptiveRadio_module_scss_1["default"]["adaptive-radio"] }, optionsItems.map(function (item) { return (react_1["default"].createElement(AdaptiveRadioItem_1["default"], { key: item.value, title: item.date, value: item.value, id: item.id, name: item.name, isActive: item.value === currentValue, emitValue: onChangeRadio })); })));
};
exports["default"] = AdaptiveRadio;
