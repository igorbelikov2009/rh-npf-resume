"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InputSubmit_module_scss_1 = require("./InputSubmit.module.scss");
var InputSubmit = function (_a) {
    var children = _a.children, disabled = _a.disabled;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { className: InputSubmit_module_scss_1["default"]["input-submit"], type: "submit", value: children, disabled: disabled })));
};
exports["default"] = InputSubmit;
