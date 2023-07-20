"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ArchiveLink_1 = require("../../../ui/links/ArchiveLink/ArchiveLink");
var IndicatorRow_1 = require("../IndicatorRow/IndicatorRow");
var IndicatorsYear_module_scss_1 = require("./IndicatorsYear.module.scss");
var IndicatorsYear = function (_a) {
    var isVisible = _a.isVisible, heading = _a.heading, subheading = _a.subheading, archiveLinks = _a.archiveLinks, indicatorRows = _a.indicatorRows;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isVisible && (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: IndicatorsYear_module_scss_1["default"]["indicators-year"] },
                react_1["default"].createElement("p", { className: IndicatorsYear_module_scss_1["default"]["indicators-year__heading"] }, heading),
                react_1["default"].createElement("p", { className: IndicatorsYear_module_scss_1["default"]["indicators-year__subheading"] }, subheading)),
            indicatorRows &&
                indicatorRows.map(function (indicatorRow, index) { return (react_1["default"].createElement(IndicatorRow_1["default"], { key: index, title: indicatorRow.title, index: indicatorRow.index })); })),
        archiveLinks.map(function (link, index) { return (react_1["default"].createElement(ArchiveLink_1["default"], { key: index, href: link.href, title: link.title })); })))));
};
exports["default"] = IndicatorsYear;
