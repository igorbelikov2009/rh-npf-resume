"use strict";
exports.__esModule = true;
var react_1 = require("react");
var newsTop_jpg_1 = require("../assets/images/news/newsTop.jpg");
var TopBlock_1 = require("../components/general/TopBlock/TopBlock");
var ListNews_1 = require("../components/news/ListNews/ListNews");
var News = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438", image: newsTop_jpg_1["default"] }),
        react_1["default"].createElement(ListNews_1["default"], null)));
};
exports["default"] = News;
