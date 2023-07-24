"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ServerIsLoading_module_scss_1 = require("./ServerIsLoading.module.scss");
var ServerIsLoading = function () {
    return (react_1["default"].createElement("div", { className: ServerIsLoading_module_scss_1["default"]["loader-container"] },
        react_1["default"].createElement("span", { className: ServerIsLoading_module_scss_1["default"].loader })));
};
exports["default"] = ServerIsLoading;
