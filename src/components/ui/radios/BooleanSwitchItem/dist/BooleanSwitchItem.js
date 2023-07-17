"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BooleanSwitchItem_module_scss_1 = require("./BooleanSwitchItem.module.scss");
var BooleanSwitchItem = function (_a) {
    var value = _a.value, title = _a.title, name = _a.name, isActive = _a.isActive, emitValue = _a.emitValue;
    var radioHandler = function (event) {
        emitValue(event.target.value);
    };
    return (react_1["default"].createElement("label", { className: isActive ? BooleanSwitchItem_module_scss_1["default"]["boolean-switch_active"] : BooleanSwitchItem_module_scss_1["default"]["boolean-switch"] },
        react_1["default"].createElement("input", { className: BooleanSwitchItem_module_scss_1["default"]["boolean-switch__field"], type: "radio", name: name, value: value, onChange: radioHandler }),
        react_1["default"].createElement("p", { className: BooleanSwitchItem_module_scss_1["default"]["boolean-switch__title"] }, title)));
};
exports["default"] = BooleanSwitchItem;
