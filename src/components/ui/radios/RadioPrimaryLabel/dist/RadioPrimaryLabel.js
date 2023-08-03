"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioPrimaryLabel_module_scss_1 = require("./RadioPrimaryLabel.module.scss");
var RadioPrimaryLabel = function (_a) {
    var value = _a.value, title = _a.title, name = _a.name, isActive = _a.isActive, emitValue = _a.emitValue;
    var radioHandler = function (event) {
        emitValue(event.target.value);
    };
    return (react_1["default"].createElement("label", { className: isActive ? RadioPrimaryLabel_module_scss_1["default"]["item-active"] : RadioPrimaryLabel_module_scss_1["default"]["item"] },
        react_1["default"].createElement("input", { className: RadioPrimaryLabel_module_scss_1["default"]["item__field"], type: "radio", name: name, value: value, onChange: radioHandler }),
        react_1["default"].createElement("p", { className: RadioPrimaryLabel_module_scss_1["default"]["item__title"] }, title)));
};
exports["default"] = RadioPrimaryLabel;
