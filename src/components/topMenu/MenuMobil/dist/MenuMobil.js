"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var DarkIcon_1 = require("../../general/DarkIcon/DarkIcon");
var Logotypes_1 = require("../../general/Logotypes/Logotypes");
var MenuMobil_module_scss_1 = require("./MenuMobil.module.scss");
var MenuMobil = function (_a) {
    var isVisible = _a.isVisible, closeMenuMobil = _a.closeMenuMobil;
    var navigate = react_router_dom_1.useNavigate();
    var isBackgroundWhite = react_1.useState(true)[0];
    var topLinks = [
        { to: "/about", children: "О Фонде" },
        { to: "/managment", children: "Руководство Фондом" },
        { to: "/info", children: "Раскрытие информации" },
        { to: "/investment", children: "Инвестиционная деятельность" },
        { to: "/business", children: "Для бизнеса" },
    ];
    var bottomLinks = [
        { to: "/#calculator", children: "Калькулятор" },
        { to: "/support#form", children: "Написать нам" },
        { to: "/support#questionsAnswers", children: "Вопросы и ответы" },
    ];
    return (react_1["default"].createElement("section", { className: isVisible ? MenuMobil_module_scss_1["default"]["menu-mobil__right-20"] : MenuMobil_module_scss_1["default"]["menu-mobil__right-100"] },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: MenuMobil_module_scss_1["default"]["menu-mobil__logos"], onClick: function () { return navigate("/", { replace: true }); } },
                react_1["default"].createElement(Logotypes_1["default"], { isBackgroundWhite: isBackgroundWhite })),
            topLinks.map(function (link, index) { return (react_1["default"].createElement(react_router_dom_1.Link, { to: link.to, onClick: closeMenuMobil, className: MenuMobil_module_scss_1["default"]["menu-mobil__link"], key: index }, link.children)); }),
            react_1["default"].createElement("p", { className: MenuMobil_module_scss_1["default"]["menu-mobil__title"] }, "\u041A\u043B\u0438\u0435\u043D\u0442\u0430\u043C"),
            bottomLinks.map(function (link) { return (react_1["default"].createElement(react_router_dom_1.Link, { to: link.to, key: link.to, onClick: closeMenuMobil, className: MenuMobil_module_scss_1["default"]["menu-mobil__link"] }, link.children)); }),
            react_1["default"].createElement("div", { className: MenuMobil_module_scss_1["default"]["menu-mobil__phone"] },
                react_1["default"].createElement("a", { href: "tel:+78002004766", className: MenuMobil_module_scss_1["default"]["menu-mobil__link"] },
                    react_1["default"].createElement("p", { className: MenuMobil_module_scss_1["default"]["menu-mobil__phone-number"] }, "8 800 200-47-66")))),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", { className: MenuMobil_module_scss_1["default"]["menu-mobil__copy-right"] }, "\u00A92009-2019 \u041D\u041F\u0424\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441. \u041F\u0435\u043D\u0441\u0438\u0438"),
            react_1["default"].createElement("p", { className: MenuMobil_module_scss_1["default"]["menu-mobil__copy-right"] }, "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u2116 383/2 \u043E\u0442 16 \u0438\u044E\u043D\u044F 2009 \u0433\u043E\u0434\u0430")),
        react_1["default"].createElement("button", { className: MenuMobil_module_scss_1["default"]["menu-mobil__cross-switch"] },
            react_1["default"].createElement("div", { className: MenuMobil_module_scss_1["default"]["menu-mobil__cross-image"], onClick: closeMenuMobil },
                react_1["default"].createElement(DarkIcon_1["default"], { icon: "Cross" })))));
};
exports["default"] = MenuMobil;
