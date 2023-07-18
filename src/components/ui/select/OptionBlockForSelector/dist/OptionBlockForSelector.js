"use strict";
exports.__esModule = true;
var react_1 = require("react");
var OptionItem_1 = require("../OptionItem/OptionItem");
var OptionBlockForSelector_module_scss_1 = require("./OptionBlockForSelector.module.scss");
var OptionBlockForSelector = function (_a) {
    var arrayOptionsBlock = _a.arrayOptionsBlock, currentValue = _a.currentValue, emitValue = _a.emitValue, onClickOptionsBlock = _a.onClickOptionsBlock;
    var onChangeOption = function (value, id) {
        emitValue(value, id);
    };
    return (react_1["default"].createElement("div", { className: OptionBlockForSelector_module_scss_1["default"]["options-block"], onClick: onClickOptionsBlock },
        react_1["default"].createElement("div", { className: OptionBlockForSelector_module_scss_1["default"]["scrollable-block"] }, arrayOptionsBlock.map(function (option, index) { return (react_1["default"].createElement(OptionItem_1["default"], { key: index, date: option.date, value: option.value, id: option.id, isActive: option.value === currentValue, emitValue: onChangeOption })); }))));
};
exports["default"] = OptionBlockForSelector;
