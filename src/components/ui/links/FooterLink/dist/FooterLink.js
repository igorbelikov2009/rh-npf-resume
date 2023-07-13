"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var FooterLink_module_scss_1 = require("./FooterLink.module.scss");
var FooterLink = function (_a) {
    var children = _a.children, to = _a.to;
    // параметром useMatch будет объект настройки
    var match = react_router_dom_1.useMatch({
        path: to,
        // полностью ссылка включена или нет.
        // Если это главная страничка, то мы берём полный путь. Если не главная, то неполный путь.
        // to - это наша ссылка, если это главная страница, то to имеет длину единичку.
        end: to.length === 1
    });
    //   console.log(match);
    return (react_1["default"].createElement(react_router_dom_1.Link, { to: to, className: match ? FooterLink_module_scss_1["default"]["link-active"] : FooterLink_module_scss_1["default"]["link"] }, children));
};
exports["default"] = FooterLink;
