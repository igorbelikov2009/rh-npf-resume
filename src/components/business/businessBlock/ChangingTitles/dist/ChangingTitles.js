"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ChangingTitles_module_scss_1 = require("./ChangingTitles.module.scss");
var ChangingTitles = function (_a) {
    var isActive = _a.isActive, title = _a.title;
    return react_1["default"].createElement("div", null, isActive && react_1["default"].createElement("h2", { className: ChangingTitles_module_scss_1["default"].heading },
        " ",
        title,
        " "));
};
exports["default"] = ChangingTitles;
