"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioSecondaryLabel_module_scss_1 = require("./RadioSecondaryLabel.module.scss");
var RadioSecondaryLabel = function (_a) {
    var value = _a.value, title = _a.title, name = _a.name, isActive = _a.isActive, emitValue = _a.emitValue;
    var radioHandler = function (event) {
        emitValue(event.target.value);
    };
    return (react_1["default"].createElement("label", { className: isActive ? RadioSecondaryLabel_module_scss_1["default"]["item__active"] : RadioSecondaryLabel_module_scss_1["default"]["item"] },
        react_1["default"].createElement("input", { className: RadioSecondaryLabel_module_scss_1["default"]["item__field"], type: "radio", value: value, name: name, onChange: radioHandler }),
        react_1["default"].createElement("p", { className: RadioSecondaryLabel_module_scss_1["default"]["item__title"] }, title)));
};
exports["default"] = RadioSecondaryLabel;
