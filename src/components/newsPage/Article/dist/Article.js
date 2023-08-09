"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Article_module_scss_1 = require("./Article.module.scss");
var Article = function (_a) {
    var id = _a.id, title = _a.title, date = _a.date, paragraphs = _a.paragraphs;
    return (react_1["default"].createElement("div", { className: Article_module_scss_1["default"]["news__container"] },
        react_1["default"].createElement("h1", { className: Article_module_scss_1["default"]["news__heading"] },
            " ",
            title,
            " "),
        react_1["default"].createElement("p", { className: Article_module_scss_1["default"]["news__date"] },
            " ",
            date,
            " "),
        paragraphs.map(function (paragraph) { return (react_1["default"].createElement("p", { key: paragraph, className: Article_module_scss_1["default"]["news__paragraph"] }, paragraph)); })));
};
exports["default"] = Article;
