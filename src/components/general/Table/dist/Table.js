"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Table_module_scss_1 = require("./Table.module.scss");
var Table = function (_a) {
    var headings = _a.headings, arrayRows = _a.arrayRows;
    return (react_1["default"].createElement("div", { className: Table_module_scss_1["default"]["table"] },
        react_1["default"].createElement("div", { className: Table_module_scss_1["default"]["table__scrolling"] },
            react_1["default"].createElement("table", null,
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", { className: Table_module_scss_1["default"]["tr"] }, headings.map(function (heading, index) { return (react_1["default"].createElement("th", { key: index, className: Table_module_scss_1["default"]["th"] }, heading)); }))),
                react_1["default"].createElement("tbody", null, arrayRows.map(function (row, index) { return (react_1["default"].createElement("tr", { key: index, className: Table_module_scss_1["default"]["tr"] }, row.map(function (cell, index) { return (react_1["default"].createElement("td", { key: index, className: Table_module_scss_1["default"]["td"] }, cell)); }))); }))))));
};
exports["default"] = Table;
