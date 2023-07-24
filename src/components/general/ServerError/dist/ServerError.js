"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ServerError_module_scss_1 = require("./ServerError.module.scss");
var ServerError = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("h1", { className: ServerError_module_scss_1["default"]["server-error"] }, " \u0417\u0430\u043F\u0443\u0441\u0442\u0438 \u0441\u0435\u0440\u0432\u0435\u0440: json-server --watch db.json --port 5000 ")));
};
exports["default"] = ServerError;
