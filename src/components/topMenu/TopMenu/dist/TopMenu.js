"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TripleIcon_1 = require("../../general/TripleIcon/TripleIcon");
var TopMenu_module_scss_1 = require("./TopMenu.module.scss");
var TopMenu = function () {
    var _a = react_1.useState(false), isBackgroundWhite = _a[0], setBackgroundWhite = _a[1];
    var _b = react_1.useState(false), isHamburgerHovered = _b[0], setHamburgerHovered = _b[1];
    var _c = react_1.useState(false), isMenuMobilVisible = _c[0], setMenuMobilVisible = _c[1];
    var openMenuMobil = function () {
        setMenuMobilVisible(true);
        document.body.style.overflow = "hidden";
        // console.log(isMenuMobilVisible);
    };
    return (react_1["default"].createElement("header", { className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__with-border"] : TopMenu_module_scss_1["default"]["top-menu"] },
        react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__container"] },
            react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__left-block"] },
                react_1["default"].createElement("div", { onMouseOver: function () { return setHamburgerHovered(true); }, onMouseOut: function () { return setHamburgerHovered(false); }, onClick: openMenuMobil, className: TopMenu_module_scss_1["default"]["top-menu__hamburger"] },
                    react_1["default"].createElement(TripleIcon_1["default"], { icon: "Hamburger", light: !isBackgroundWhite, hovered: isHamburgerHovered })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", null, "Logotypes")),
                react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__nav"] },
                    react_1["default"].createElement("div", null, "MenuLink"))),
            react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__right-block"] },
                react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__contacts"] }, "top-menu__contacts\""),
                react_1["default"].createElement("div", { className: TopMenu_module_scss_1["default"]["top-menu__private-office"] },
                    react_1["default"].createElement("div", null, "TripleIcon "),
                    react_1["default"].createElement("p", { className: isBackgroundWhite ? TopMenu_module_scss_1["default"]["top-menu__title_news"] : TopMenu_module_scss_1["default"]["top-menu__title"] }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"))))));
};
exports["default"] = TopMenu;
