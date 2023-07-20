"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var FormControl = function (_a) {
    var type = _a.type, value = _a.value, setValue = _a.setValue, placeholder = _a.placeholder;
    var handlerChange = function (e) {
        setValue(e.target.value);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_bootstrap_1.Form.Control, { className: "mb-2 fullWidth", type: type, value: value, onChange: handlerChange, placeholder: placeholder, "aria-label": "Username", "aria-describedby": "basic-addon1" })));
};
exports["default"] = FormControl;
