"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioCircleItem_module_scss_1 = require("./RadioCircleItem.module.scss");
var RadioCircleItem = function (_a) {
    var value = _a.value, title = _a.title, isActive = _a.isActive, emitValue = _a.emitValue;
    var radioHandler = function (event) {
        emitValue(event.target.value);
    };
    return (react_1["default"].createElement("label", { className: isActive ? RadioCircleItem_module_scss_1["default"]["radio-item_acive"] : RadioCircleItem_module_scss_1["default"]["radio-item"] },
        react_1["default"].createElement("input", { className: RadioCircleItem_module_scss_1["default"]["field"], type: "radio", name: "content", value: value, onChange: radioHandler }),
        react_1["default"].createElement("p", { className: isActive ? RadioCircleItem_module_scss_1["default"]["title-active"] : RadioCircleItem_module_scss_1["default"]["title"] }, title)));
};
exports["default"] = RadioCircleItem;
