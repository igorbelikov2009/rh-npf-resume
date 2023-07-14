"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Checkbox_module_scss_1 = require("./Checkbox.module.scss");
var Checkbox = function (_a) {
    var checkedValue = _a.checkedValue, toogleChecked = _a.toogleChecked, title = _a.title, span = _a.span, subtitle = _a.subtitle;
    var checkboxHandler = function () {
        toogleChecked();
    };
    return (react_1["default"].createElement("label", { role: "checkbox", "aria-checked": true, "aria-labelledby": "foo", className: Checkbox_module_scss_1["default"]["r-checkbox"] },
        react_1["default"].createElement("span", { className: Checkbox_module_scss_1["default"]["r-checkbox__checker"] }),
        react_1["default"].createElement("div", { className: checkedValue ? Checkbox_module_scss_1["default"]["r-checkbox__switch_visible"] : Checkbox_module_scss_1["default"]["r-checkbox__switch_invisible"] }),
        react_1["default"].createElement("input", { type: "checkbox", checked: checkedValue, onChange: checkboxHandler, className: Checkbox_module_scss_1["default"]["r-checkbox__input"] }),
        react_1["default"].createElement("div", { className: Checkbox_module_scss_1["default"]["r-checkbox__agree"] },
            react_1["default"].createElement("span", { className: Checkbox_module_scss_1["default"]["r-checkbox__agree-title"] }, title),
            react_1["default"].createElement("span", { className: Checkbox_module_scss_1["default"]["r-checkbox__agree-span"] },
                span,
                " "),
            react_1["default"].createElement("span", { className: Checkbox_module_scss_1["default"]["r-checkbox__agree-title"] }, subtitle))));
};
exports["default"] = Checkbox;
