"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TableQ_module_scss_1 = require("./TableQ.module.scss");
var TableQ = function (_a) {
    var headings = _a.headings, arrayRows = _a.arrayRows;
    return (react_1["default"].createElement("div", { className: TableQ_module_scss_1["default"]["table__table-container"] },
        react_1["default"].createElement("div", { className: TableQ_module_scss_1["default"]["table__table"] },
            react_1["default"].createElement("table", null,
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", { className: TableQ_module_scss_1["default"]["tr"] }, headings.map(function (heading, index) { return (react_1["default"].createElement("td", { key: index, className: TableQ_module_scss_1["default"]["td"] },
                        react_1["default"].createElement("p", { className: TableQ_module_scss_1["default"]["table__headers-row"] },
                            " ",
                            heading,
                            " "))); }))),
                react_1["default"].createElement("tbody", null, arrayRows.map(function (row, index) { return (react_1["default"].createElement("tr", { key: index, className: TableQ_module_scss_1["default"]["tr"] }, row.map(function (cell, index) { return (react_1["default"].createElement("td", { key: index, className: TableQ_module_scss_1["default"]["td"] },
                    react_1["default"].createElement("p", { className: TableQ_module_scss_1["default"]["table__cell-row"] }, cell))); }))); }))))));
};
exports["default"] = TableQ;
