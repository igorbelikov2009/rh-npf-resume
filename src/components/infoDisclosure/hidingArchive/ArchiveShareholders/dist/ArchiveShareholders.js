"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ArchiveLink_1 = require("../../../ui/links/ArchiveLink/ArchiveLink");
var ArchiveShareholders_module_scss_1 = require("./ArchiveShareholders.module.scss");
var ArchiveShareholders = function () {
    var linksArchiveShareholders = [
        {
            href: "/pdf/infoOpening/archive-aktsionerov/01 Beneficiaries structure 16.03.2021.pdf",
            title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием находится Фонд (на 16.03.2021)"
        },
        {
            href: "/pdf/infoOpening/archive-aktsionerov/02 Beneficiaries structure 04.03.2021.pdf",
            title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 04.03.2021)"
        },
        {
            href: "/pdf/infoOpening/archive-aktsionerov/03 Beneficiaries structure 18.02.2021.pdf",
            title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 18.02.2021)"
        },
        {
            href: "/pdf/infoOpening/archive-aktsionerov/04 Beneficiaries structure 08.02.2021.pdf",
            title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 08.02.2021)"
        },
        {
            href: "/pdf/infoOpening/archive-aktsionerov/05 Список акционеров Фонда 03.09.2020.pdf",
            title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 03.09.2020)"
        },
        {
            href: "/pdf/infoOpening/archive-aktsionerov/06 Beneficiaries structure 27.03.2020.pdf",
            title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 27.03.2020)"
        },
        {
            href: "/pdf/infoOpening/archive-aktsionerov/07 Beneficiaries structure 11.03.2020.pdf",
            title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 11.03.2020)"
        },
        {
            href: "/pdf/infoOpening/archive-aktsionerov/08 Beneficiaries structure 31.12.2019.pdf",
            title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 31.12.2019)"
        },
        {
            href: "/pdf/infoOpening/archive-aktsionerov/09 Beneficiaries structure 05.12.2019.pdf",
            title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 05.12.2019)"
        },
        {
            href: "/pdf/infoOpening/archive-aktsionerov/10 Beneficiaries structure 30.09.2019.pdf",
            title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 30.09.2019)"
        },
        {
            href: "/pdf/infoOpening/archive-aktsionerov/11 Beneficiaries structure 25.07.2019-1577255864084.pdf",
            title: "Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд (на 25.07.2019)"
        },
    ];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", { className: ArchiveShareholders_module_scss_1["default"]["heading"] }, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0438 \u0441\u043E\u0441\u0442\u0430\u0432 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u0432"),
        linksArchiveShareholders.map(function (link, index) { return (react_1["default"].createElement(ArchiveLink_1["default"], { key: index, href: link.href, title: link.title })); })));
};
exports["default"] = ArchiveShareholders;
