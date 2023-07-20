"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Report_1 = require("../Report/Report");
var Reports = function (_a) {
    var reports = _a.reports, isVisible = _a.isVisible;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isVisible && (react_1["default"].createElement("div", null, reports.map(function (report, index) { return (react_1["default"].createElement(Report_1["default"], { key: index, heading: report.heading, archiveLinks: report.archiveLinks })); })))));
};
exports["default"] = Reports;
