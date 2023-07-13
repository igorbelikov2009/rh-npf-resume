"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FundCarouselColumn_1 = require("../FundCarouselColumn/FundCarouselColumn");
var FundCarousel_module_scss_1 = require("./FundCarousel.module.scss");
var FundCarousel = function (_a) {
    var jj = _a.jj, qq = _a.qq, columns = _a.columns, emitWidthColumn = _a.emitWidthColumn;
    var getWidthColumn = function (widthColumn) {
        emitWidthColumn(widthColumn);
    };
    return (react_1["default"].createElement("div", { className: FundCarousel_module_scss_1["default"]["fund-carousel"] }, columns &&
        columns.map(function (column, index) { return (react_1["default"].createElement(FundCarouselColumn_1["default"], { key: index, description: column.description, title: column.title, isClear: index === qq || jj === index, emitWidthColumn: getWidthColumn })); })));
};
exports["default"] = FundCarousel;
