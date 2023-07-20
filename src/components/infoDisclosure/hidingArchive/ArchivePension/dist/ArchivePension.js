"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ArchiveLink_1 = require("../../../ui/links/ArchiveLink/ArchiveLink");
var ArchivePension_module_scss_1 = require("./ArchivePension.module.scss");
var ArchivePension = function () {
    var links = [
        {
            href: "/pdf/infoOpening/archive-pension/01 pravila_fond_trudovih_nakopleniy.pdf",
            title: 'Правила НПФ "Фонд Трудовых накоплений"'
        },
        {
            href: "/pdf/infoOpening/archive-pension/02 pravila_npf_aviva_18.05.2009 2.pdf",
            title: 'Правила НПФ "Авива"'
        },
        {
            href: "/pdf/infoOpening/archive-pension/03 pravila_aviva_2007 3-.pdf",
            title: 'Правила НПФ "Авива"'
        },
        {
            href: "/pdf/infoOpening/archive-pension/04 Пенсионные правила НПФ ИНГ.pdf",
            title: 'Правила НПФ "ИНГ"'
        },
        {
            href: "/pdf/infoOpening/archive-pension/05 Pension Rules_2005 4.pdf",
            title: 'Правила НПФ "ИНГ"'
        },
        {
            href: "/pdf/infoOpening/archive-pension/06 2008-11-10_pravila_npf_ing 5.pdf",
            title: 'Правила НПФ "ИНГ"'
        },
        {
            href: "/pdf/infoOpening/archive-pension/07 pensionnie_pravila_APO_20.01.2010 6.pdf",
            title: 'Правила НПФ "Авива Пенсионное обеспечение"'
        },
        {
            href: "/pdf/infoOpening/archive-pension/08 pravila_16.08.2011 7.pdf",
            title: 'Правила НПФ "Авива Пенсионное обеспечение"'
        },
    ];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: ArchivePension_module_scss_1["default"]["heading"] }, "\u041F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430"),
        links.map(function (link, index) { return (react_1["default"].createElement(ArchiveLink_1["default"], { key: index, href: link.href, title: link.title })); })));
};
exports["default"] = ArchivePension;
