"use strict";
exports.__esModule = true;
var react_1 = require("react");
var infoDisclosureData_1 = require("../../../data/infoDisclosureData");
var ArchiveLink_1 = require("../../ui/links/ArchiveLink/ArchiveLink");
var DocumentsOfTitle_module_scss_1 = require("./DocumentsOfTitle.module.scss");
var DocumentsOfTitle = function () {
    return (react_1["default"].createElement("section", { className: DocumentsOfTitle_module_scss_1["default"]["documents-of-title"] },
        react_1["default"].createElement("div", { className: DocumentsOfTitle_module_scss_1["default"]["documents-of-title__container"] },
            react_1["default"].createElement("h1", { className: DocumentsOfTitle_module_scss_1["default"]["documents-of-title__heading"] }, "\u041F\u0440\u0430\u0432\u043E\u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0449\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"),
            react_1["default"].createElement("div", { className: DocumentsOfTitle_module_scss_1["default"]["documents-of-title__list"] }, infoDisclosureData_1.linksDocumentsOfTitle.map(function (link, index) { return (react_1["default"].createElement(ArchiveLink_1["default"], { key: index, href: link.href, title: link.title })); })))));
};
exports["default"] = DocumentsOfTitle;
