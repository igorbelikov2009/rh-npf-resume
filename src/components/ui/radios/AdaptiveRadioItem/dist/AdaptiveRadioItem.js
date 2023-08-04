"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AdaptiveRadioItem_module_scss_1 = require("./AdaptiveRadioItem.module.scss");
var AdaptiveRadioItem = function (_a) {
    var value = _a.value, id = _a.id, title = _a.title, isActive = _a.isActive, emitValue = _a.emitValue;
    var radioHandler = function (event) {
        emitValue(event.target.value, id);
    };
    return (react_1["default"].createElement("label", { className: isActive ? AdaptiveRadioItem_module_scss_1["default"]["radio-item-active"] : AdaptiveRadioItem_module_scss_1["default"]["radio-item"] },
        title,
        react_1["default"].createElement("input", { className: AdaptiveRadioItem_module_scss_1["default"]["radio-item__input"], type: "radio", value: value, id: id, onChange: radioHandler })));
};
exports["default"] = AdaptiveRadioItem;
