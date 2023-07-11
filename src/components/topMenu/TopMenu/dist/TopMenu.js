"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var TripleIcon_1 = require("../../general/TripleIcon/TripleIcon");
var TopMenu_module_scss_1 = require("./TopMenu.module.scss");
var react_router_dom_1 = require("react-router-dom");
var Logotypes_1 = require("../../general/Logotypes/Logotypes");
var MenuLink_1 = require("../../ui/links/MenuLink/MenuLink");
var TopMenu = function () {
    var _a = react_1.useState(false), isBackgroundWhite = _a[0], setBackgroundWhite = _a[1];
    var _b = react_1.useState(false), isAdminLoginVisible = _b[0], setAdminLoginVisible = _b[1];
    var _c = react_1.useState(false), isPrivateOfficeHovered = _c[0], setPrivateOfficeHovered = _c[1];
    var _d = react_1.useState(false), isHamburgerHovered = _d[0], setHamburgerHovered = _d[1];
    var _e = react_1.useState(false), isMenuMobilVisible = _e[0], setMenuMobilVisible = _e[1];
    var _f = react_1.useState(false), isLoginFormVisible = _f[0], setLoginFormVisible = _f[1];
    var navigate = react_router_dom_1.useNavigate();
    var pathname = react_router_dom_1.useLocation().pathname;
    // console.log(pathname);
    var TopMenuLinks = [
        { to: "/about", children: "О нас" },
        { to: "/investment", children: "Инвестиции" },
        { to: "/business", children: "Для бизнеса" },
        { to: "/news", children: "Новости" },
        { to: "/support", children: "Поддержка" },
        { to: "/contacts", children: "Контакты" },
    ];
    react_1.useEffect(function () {
        if (pathname === "/" ||
            pathname === "/about" ||
            pathname === "/business" ||
            pathname === "/info" ||
            pathname === "/investment" ||
            pathname === "/managment" ||
            pathname === "/news" ||
            pathname === "/notfoundpage" ||
            pathname === "/support" ||
            pathname === "/taxation") {
            setBackgroundWhite(false);
        }
        else {
            setBackgroundWhite(true);
        }
    }, [pathname, setBackgroundWhite]);
    var openLoginForm = function () {
        setLoginFormVisible(function (prev) { return !prev; });
        if (isLoginFormVisible) {
            document.body.style.overflow = "";
        }
        else {
            document.body.style.overflow = "hidden";
        }
    };
    var openMenuMobil = function () {
        setMenuMobilVisible(true);
        document.body.style.overflow = "hidden";
    };
    var openAdminLogin = function () {
        setAdminLoginVisible(!isAdminLoginVisible);
    };
    return (react_1["default"].createElement("header", { className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__with-border"] : TopMenu_module_scss_1["default"]["top-menu"] },
        react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__container"] },
            react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__left-block"] },
                react_1["default"].createElement("div", { onMouseOver: function () { return setHamburgerHovered(true); }, onMouseOut: function () { return setHamburgerHovered(false); }, onClick: openMenuMobil, className: TopMenu_module_scss_1["default"]["top-menu__hamburger"] },
                    react_1["default"].createElement(TripleIcon_1["default"], { icon: "Hamburger", light: !isBackgroundWhite, hovered: isHamburgerHovered })),
                react_1["default"].createElement("div", { onClick: function () { return navigate("/", { replace: true }); } },
                    react_1["default"].createElement(Logotypes_1["default"], { isBackgroundWhite: isBackgroundWhite })),
                react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__nav"] }, TopMenuLinks.map(function (link) { return (react_1["default"].createElement(MenuLink_1["default"], { key: link.to, to: link.to, isBackgroundWhite: isBackgroundWhite }, link.children)); }))),
            react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__right-block"] },
                react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__contacts"] },
                    react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__phone"] },
                        react_1["default"].createElement("a", { href: "tel:+78002004766", className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__link_news"] : TopMenu_module_scss_1["default"]["top-menu__link"] }, "8 800 200-47-66"),
                        react_1["default"].createElement("button", { onClick: openAdminLogin, className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__call-back_news"] : TopMenu_module_scss_1["default"]["top-menu__call-back"] }, "\u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440"))),
                react_1["default"].createElement("div", { onMouseOver: function () { return setPrivateOfficeHovered(true); }, onMouseOut: function () { return setPrivateOfficeHovered(false); }, onClick: openLoginForm, className: TopMenu_module_scss_1["default"]["top-menu__private-office"] },
                    react_1["default"].createElement(TripleIcon_1["default"], { icon: "User", light: !isBackgroundWhite, hovered: isPrivateOfficeHovered }),
                    react_1["default"].createElement("p", { className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__title_news"] : TopMenu_module_scss_1["default"]["top-menu__title"] }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"))))));
};
exports["default"] = TopMenu;
