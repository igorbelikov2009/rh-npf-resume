"use strict";
exports.__esModule = true;
// Страница готова
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var TripleIcon_1 = require("../../general/TripleIcon/TripleIcon");
var TopMenu_module_scss_1 = require("./TopMenu.module.scss");
var react_router_dom_1 = require("react-router-dom");
var Logotypes_1 = require("../../general/Logotypes/Logotypes");
var MenuLink_1 = require("../../ui/links/MenuLink/MenuLink");
var MenuMobil_1 = require("../MenuMobil/MenuMobil");
var context_1 = require("../../../context");
var AdminLogin_1 = require("../AdminLogin/AdminLogin");
var LoginForm_1 = require("../LoginForm/LoginForm");
var TopMenu = function () {
    var _a = react_1.useContext(context_1.AuthContext), isBackgroundWhite = _a.isBackgroundWhite, setBackgroundWhite = _a.setBackgroundWhite, isAdminLoginVisible = _a.isAdminLoginVisible, setAdminLoginVisible = _a.setAdminLoginVisible;
    var _b = react_1.useState(false), isPrivateOfficeHovered = _b[0], setPrivateOfficeHovered = _b[1];
    var _c = react_1.useState(false), isHamburgerHovered = _c[0], setHamburgerHovered = _c[1];
    var _d = react_1.useState(false), isMenuMobilVisible = _d[0], setMenuMobilVisible = _d[1];
    var _e = react_1.useState(false), isLoginFormVisible = _e[0], setLoginFormVisible = _e[1];
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
    var closeLoginForm = function () {
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
    var closeMenuMobil = function () {
        setMenuMobilVisible(false);
        document.body.style.overflow = "";
    };
    var openAdminLogin = function () {
        setAdminLoginVisible(!isAdminLoginVisible);
        // document.body.style.overflow = "hidden";
    };
    var closeAdminLogin = function () {
        setAdminLoginVisible(false);
        // document.body.style.overflow = "";
    };
    return (react_1["default"].createElement("header", { className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__with-border"] : TopMenu_module_scss_1["default"]["top-menu"] },
        react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__container"] },
            react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__left-block"] },
                react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__hamburger"], onMouseOver: function () { return setHamburgerHovered(true); }, onMouseOut: function () { return setHamburgerHovered(false); }, onClick: openMenuMobil },
                    react_1["default"].createElement(TripleIcon_1["default"], { icon: "Hamburger", light: !isBackgroundWhite, hovered: isHamburgerHovered })),
                react_1["default"].createElement("div", { onClick: function () { return navigate("/", { replace: true }); } },
                    react_1["default"].createElement(Logotypes_1["default"], { isBackgroundWhite: isBackgroundWhite })),
                react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__nav"] }, TopMenuLinks.map(function (link) { return (react_1["default"].createElement(MenuLink_1["default"], { key: link.to, to: link.to, isBackgroundWhite: isBackgroundWhite }, link.children)); }))),
            react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__right-block"] },
                react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__contacts"] },
                    react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__contacts-container"] },
                        react_1["default"].createElement("a", { className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__phone_news"] : TopMenu_module_scss_1["default"]["top-menu__phone"], href: "tel:+78002004766" }, "8 800 200-47-66"),
                        react_1["default"].createElement("button", { onClick: openAdminLogin, className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__admin_news"] : TopMenu_module_scss_1["default"]["top-menu__admin"] }, "\u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440"))),
                react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__private-office"], onMouseOver: function () { return setPrivateOfficeHovered(true); }, onMouseOut: function () { return setPrivateOfficeHovered(false); }, onClick: openLoginForm },
                    react_1["default"].createElement(TripleIcon_1["default"], { icon: "User", light: !isBackgroundWhite, hovered: isPrivateOfficeHovered }),
                    react_1["default"].createElement("p", { className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__title_news"] : TopMenu_module_scss_1["default"]["top-menu__title"] }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442")))),
        react_1["default"].createElement(LoginForm_1["default"], { isVisible: isLoginFormVisible, closeLoginForm: closeLoginForm }),
        react_1["default"].createElement(MenuMobil_1["default"], { isVisible: isMenuMobilVisible, closeMenuMobil: closeMenuMobil }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isAdminLoginVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement(AdminLogin_1["default"], { closeAdminLogin: closeAdminLogin }))))));
};
exports["default"] = TopMenu;
