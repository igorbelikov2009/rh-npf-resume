"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ArchiveLink_1 = require("../../ui/links/ArchiveLink/ArchiveLink");
var InvestmentArchive_module_scss_1 = require("./InvestmentArchive.module.scss");
var InvestmentArchive = function () {
    var links = [
        {
            href: "/pdf/invest/Архив структуры инвестиционного портфеля Фонда-1578928598453-1579866841961.pdf",
            title: "Архив структуры инвестиционного портфеля Фонда"
        },
        {
            href: "/pdf/invest/Информация о процессе размещения средств ПР_10.02-1581662050140.pdf",
            title: "Информация о процессе размещения средств"
        },
    ];
    return (react_1["default"].createElement("section", { className: InvestmentArchive_module_scss_1["default"]["container"] }, links.map(function (link, index) { return (react_1["default"].createElement(ArchiveLink_1["default"], { key: index, href: link.href, title: link.title, subtitle: link.subtitle })); })));
};
exports["default"] = InvestmentArchive;
