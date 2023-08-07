"use strict";
exports.__esModule = true;
var react_1 = require("react");
var OptionBlockForSelector_1 = require("../OptionBlockForSelector/OptionBlockForSelector");
var Selector_1 = require("../Selector/Selector");
var SelectorAndOptionBlock_module_scss_1 = require("./SelectorAndOptionBlock.module.scss");
// const ControllerOption
var SelectorAndOptionBlock = function (_a) {
    var isVisible = _a.isVisible, optionsItems = _a.optionsItems, currentValue = _a.currentValue, onClickSelector = _a.onClickSelector, emitOnChangeRadio = _a.emitOnChangeRadio, emitOnClickRadio = _a.emitOnClickRadio;
    var onClickRadioSelector = function () {
        onClickSelector();
    };
    var onChangeRadio = function (value, id) {
        emitOnChangeRadio(value, id);
    };
    var onClickRadio = function () {
        emitOnClickRadio();
    };
    return (react_1["default"].createElement("div", { className: SelectorAndOptionBlock_module_scss_1["default"]["container"] },
        react_1["default"].createElement(Selector_1["default"], { value: currentValue, isVisible: isVisible, onClickSelector: onClickRadioSelector }),
        react_1["default"].createElement("div", { className: isVisible ? SelectorAndOptionBlock_module_scss_1["default"]["select-options_show"] : SelectorAndOptionBlock_module_scss_1["default"]["select-options_hide"] },
            react_1["default"].createElement(OptionBlockForSelector_1["default"], { optionsItems: optionsItems, currentValue: currentValue, emitValue: onChangeRadio, onClickOptionsBlock: onClickRadio }))));
};
exports["default"] = SelectorAndOptionBlock;
