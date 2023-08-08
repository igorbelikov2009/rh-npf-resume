"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NotificsContent_module_scss_1 = require("./NotificsContent.module.scss");
var NotificsContent = function (_a) {
    var content = _a.content, isVisible = _a.isVisible;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isVisible && (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", { className: NotificsContent_module_scss_1["default"]["paragraph"] },
            react_1["default"].createElement("span", { className: NotificsContent_module_scss_1["default"]["paragraph-span"] },
                " ",
                content.date),
            react_1["default"].createElement("span", { className: NotificsContent_module_scss_1["default"]["paragraph-span"] }, content.description))))));
};
exports["default"] = NotificsContent;
