"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ParagraphBefore_module_scss_1 = require("./ParagraphBefore.module.scss");
var ParagraphBefore = function (_a) {
    var paragraphs = _a.paragraphs;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, paragraphs.map(function (paragraph, index) { return (react_1["default"].createElement("p", { key: index, className: ParagraphBefore_module_scss_1["default"]["paragraph-before"] }, paragraph)); })));
};
exports["default"] = ParagraphBefore;
