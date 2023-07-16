"use strict";
exports.__esModule = true;
var react_1 = require("react");
var taxationTop_jpg_1 = require("../assets/images/taxation/taxationTop.jpg");
var TopBlock_1 = require("../components/general/TopBlock/TopBlock");
var TaxationTable_1 = require("../components/TaxationTable/TaxationTable");
var TaxationPage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u041D\u0430\u043B\u043E\u0433\u043E\u043E\u0431\u043B\u0430\u0436\u0435\u043D\u0438\u0435", subheading: "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043D\u0430\u043B\u043E\u0433\u043E\u043E\u0431\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u0440\u0438 \u0432\u044B\u043F\u043B\u0430\u0442\u0435 \u043F\u0435\u043D\u0441\u0438\u0439 \u0438 \u0432\u044B\u043A\u0443\u043F\u043D\u044B\u0445 \u0441\u0443\u043C\u043C", image: taxationTop_jpg_1["default"] }),
        react_1["default"].createElement(TaxationTable_1["default"], null)));
};
exports["default"] = TaxationPage;
