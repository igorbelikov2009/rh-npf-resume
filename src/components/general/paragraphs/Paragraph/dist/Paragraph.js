"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Paragraph_module_scss_1 = require("./Paragraph.module.scss");
var Paragraph = function (_a) {
    var paragraphs = _a.paragraphs;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, paragraphs &&
        paragraphs.map(function (paragraph, index) { return (react_1["default"].createElement("p", { key: index, className: Paragraph_module_scss_1["default"]["paragraph"] }, paragraph)); })));
};
exports["default"] = Paragraph;
