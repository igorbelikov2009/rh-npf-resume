"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ArchiveLink_1 = require("../../../ui/links/ArchiveLink/ArchiveLink");
var ArchiveAssetValueRules_module_scss_1 = require("./ArchiveAssetValueRules.module.scss");
var ArchiveAssetValueRules = function () {
    var links = [
        {
            href: "/pdf/infoOpening/archive-asset/01 Порядок определения стоимости чистых активов Фонда архив.pdf",
            title: "Порядок определения стоимости чистых активов Фонда"
        },
        {
            href: "/pdf/infoOpening/archive-asset/02 Порядок определения стоимости чистых активов РП (опубликовано 25.12.2018).pdf",
            title: "Порядок определения стоимости чистых активов АО НПФ «Ренессанс пенсии» (опубликовано: 25.12.2018)"
        },
    ];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", { className: ArchiveAssetValueRules_module_scss_1["default"]["heading"] }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0447\u0438\u0441\u0442\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432"),
        links.map(function (link, index) { return (react_1["default"].createElement(ArchiveLink_1["default"], { key: index, href: link.href, title: link.title })); })));
};
exports["default"] = ArchiveAssetValueRules;
