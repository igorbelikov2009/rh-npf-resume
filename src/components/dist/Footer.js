"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Logotypes_1 = require("./general/Logotypes/Logotypes");
var FooterLink_1 = require("./ui/links/FooterLink/FooterLink");
require("../styles/Footer.scss");
var react_router_dom_1 = require("react-router-dom");
var context_1 = require("../context");
var Footer = function () {
    var _a = react_1.useContext(context_1.AuthContext), isAuth = _a.isAuth, setAuth = _a.setAuth;
    var navigate = react_router_dom_1.useNavigate();
    var FirstBlock = [
        {
            to: "/support#form",
            children: "Написать нам"
        },
        {
            to: "/support#questionsAnswers",
            children: "Вопросы и ответы"
        },
        { to: "/about", children: "О Фонде" },
        { to: "/managment", children: "Руководство фонда" },
    ];
    var SecondBlock = [
        {
            children: "Новости",
            to: "/news"
        },
        {
            children: "Налогообложение",
            to: "/taxation"
        },
        {
            children: "Для бизнеса",
            to: "/business"
        },
        {
            children: "Калькулятор",
            to: "/#calculator"
        },
    ];
    var ThirdBlock = [
        {
            children: "Раскрытие информации",
            to: "/info"
        },
        {
            children: "Инвестиционная деятельность",
            to: "/investment"
        },
    ];
    var handleAdminLink = function () {
        if (isAuth) {
            return;
        }
        else {
            setAuth(true);
        }
    };
    return (react_1["default"].createElement("footer", { className: "footer" },
        react_1["default"].createElement("div", { className: "footer__top-block" },
            react_1["default"].createElement("div", { onClick: function () { return navigate("/", { replace: true }); }, className: "footer__logotype" },
                react_1["default"].createElement(Logotypes_1["default"], { isBackgroundWhite: true })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("img", { className: "footer__logos", src: "/icons/logoNapf.svg", alt: "logo" }),
                react_1["default"].createElement("img", { className: "footer__logos", src: "/icons/logoAeb.svg", alt: "logo" }),
                react_1["default"].createElement("img", { className: "footer__logos", src: "/icons/logoExpert.svg", alt: "logo" }))),
        react_1["default"].createElement("div", { className: "footer__phone" },
            react_1["default"].createElement("h2", { className: "footer__phone-number" }, "8 800 200-47-66")),
        react_1["default"].createElement("div", { className: "footer__content" },
            react_1["default"].createElement("div", { className: "footer__nav" },
                react_1["default"].createElement("div", { className: "footer__column" }, FirstBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
                react_1["default"].createElement("div", { className: "footer__column" }, SecondBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); })),
                react_1["default"].createElement("div", { className: "footer__column" },
                    ThirdBlock.map(function (link) { return (react_1["default"].createElement(FooterLink_1["default"], { key: link.to, to: link.to }, link.children)); }),
                    react_1["default"].createElement("div", { className: "footer__admin-link", onClick: handleAdminLink }, isAuth ? (react_1["default"].createElement(FooterLink_1["default"], { children: "\u041F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430", to: "/adminpanel" })) : (react_1["default"].createElement("p", { className: "footer__admin-paragraph" }, "\u041F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430")))),
                react_1["default"].createElement("div", { className: "footer__column" },
                    react_1["default"].createElement("a", { className: "footer__copyright-link", href: "/pdf/infoOpening/archive-aktsionerov/01 Beneficiaries structure 16.03.2021.pdf" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u0432 \u0424\u043E\u043D\u0434\u0430 \u0438 \u043B\u0438\u0446, \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043C \u043B\u0438\u0431\u043E \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0432\u043B\u0438\u044F\u043D\u0438\u0435\u043C \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0424\u043E\u043D\u0434 (\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0432 \u0411\u0430\u043D\u043A \u0420\u043E\u0441\u0441\u0438\u0438 16.03.2021 \u0433. \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043D\u0430 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435 \u0411\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438)."),
                    react_1["default"].createElement("p", { className: "footer__copyright" }, "\u00A92009-2019 \u041D\u041F\u0424\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441. \u041F\u0435\u043D\u0441\u0438\u0438."),
                    react_1["default"].createElement("p", { className: "footer__copyright" }, "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u2116 383/2 \u043E\u0442 16 \u0438\u044E\u043D\u044F 2009 \u0433\u043E\u0434\u0430"))))));
};
exports["default"] = Footer;
