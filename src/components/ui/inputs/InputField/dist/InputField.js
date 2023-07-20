"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InputField_module_scss_1 = require("./InputField.module.scss");
var InputField = function (_a) {
    var type = _a.type, name = _a.name, isError = _a.isError, emitBlur = _a.emitBlur, emitFocus = _a.emitFocus, emitValue = _a.emitValue;
    var handlerInput = function (event) {
        emitValue(event.target.value);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { type: type, name: name, onFocus: emitFocus, onBlur: emitBlur, onChange: handlerInput, className: isError ? InputField_module_scss_1["default"]["my-input__field_invalid"] : InputField_module_scss_1["default"]["my-input__field"] })));
};
exports["default"] = InputField;
