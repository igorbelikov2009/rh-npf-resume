"use strict";
exports.__esModule = true;
var react_1 = require("react");
var IndicatorRow_module_scss_1 = require("./IndicatorRow.module.scss");
var IndicatorRow = function (_a) {
    var title = _a.title, index = _a.index;
    return (react_1["default"].createElement("div", { className: IndicatorRow_module_scss_1["default"]["indicator-row"] },
        react_1["default"].createElement("p", { className: IndicatorRow_module_scss_1["default"]["indicator-row__title"] }, title),
        react_1["default"].createElement("p", { className: IndicatorRow_module_scss_1["default"]["indicator-row__index"] }, index)));
};
exports["default"] = IndicatorRow;
