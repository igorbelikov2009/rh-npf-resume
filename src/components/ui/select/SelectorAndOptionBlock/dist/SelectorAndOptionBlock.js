"use strict";
exports.__esModule = true;
var react_1 = require("react");
var OptionBlockForSelector_1 = require("../OptionBlockForSelector/OptionBlockForSelector");
var Selector_1 = require("../Selector/Selector");
var SelectorAndOptionBlock_module_scss_1 = require("./SelectorAndOptionBlock.module.scss");
var SelectorAndOptionBlock = function (_a) {
    var isRadioListVisible = _a.isRadioListVisible, optionsItems = _a.optionsItems, currentValue = _a.currentValue, onClickController = _a.onClickController, emitOnChangeRadioListBlock = _a.emitOnChangeRadioListBlock, emitOnClickRadioListBlock = _a.emitOnClickRadioListBlock;
    var onClickRadioListSelector = function () {
        onClickController();
    };
    var onChangeRadioListBlock = function (value, id) {
        emitOnChangeRadioListBlock(value, id);
    };
    var onClickRadioListBlock = function () {
        emitOnClickRadioListBlock();
    };
    return (react_1["default"].createElement("div", { className: SelectorAndOptionBlock_module_scss_1["default"]["list"] },
        react_1["default"].createElement(Selector_1["default"], { value: currentValue, isVisible: isRadioListVisible, onClickSelector: onClickRadioListSelector }),
        react_1["default"].createElement("div", { className: isRadioListVisible ? SelectorAndOptionBlock_module_scss_1["default"]["select-options_show"] : SelectorAndOptionBlock_module_scss_1["default"]["select-options_hide"] },
            react_1["default"].createElement(OptionBlockForSelector_1["default"], { optionsItems: optionsItems, currentValue: currentValue, emitValue: onChangeRadioListBlock, onClickOptionsBlock: onClickRadioListBlock }))));
};
exports["default"] = SelectorAndOptionBlock;
