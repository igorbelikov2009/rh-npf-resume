"use strict";
exports.__esModule = true;
var react_1 = require("react");
var managementTop_jpg_1 = require("../assets/images/management/managementTop.jpg");
var TopBlock_1 = require("../components/general/TopBlock/TopBlock");
var Management_1 = require("../components/management/Management/Management");
var ManagementPage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430", image: managementTop_jpg_1["default"] }),
        react_1["default"].createElement(Management_1["default"], null)));
};
exports["default"] = ManagementPage;
