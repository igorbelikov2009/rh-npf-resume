"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InputTitle_module_scss_1 = require("./InputTitle.module.scss");
var InputTitle = function (_a) {
    var title = _a.title, isDormancy = _a.isDormancy;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: isDormancy ? InputTitle_module_scss_1["default"]["my-input__title"] : InputTitle_module_scss_1["default"]["my-input__title-top"] }, title),
        react_1["default"].createElement("p", { className: isDormancy ? InputTitle_module_scss_1["default"]["my-input__title-else-none"] : InputTitle_module_scss_1["default"]["my-input__title-else-visible"] }, title)));
};
exports["default"] = InputTitle;
