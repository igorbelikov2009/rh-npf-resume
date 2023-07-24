"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("./Layout");
var MainPage_1 = require("../pages/MainPage");
var AboutFundPage_1 = require("../pages/AboutFundPage");
var BusinessPage_1 = require("../pages/BusinessPage");
var ContactPage_1 = require("../pages/ContactPage");
var InfoDisclosurePage_1 = require("../pages/InfoDisclosurePage");
var InvestmentPage_1 = require("../pages/InvestmentPage");
var ManagementPage_1 = require("../pages/ManagementPage");
var News_1 = require("../pages/News");
var NewsPage_1 = require("../pages/NewsPage");
var NotFoundPage_1 = require("../pages/NotFoundPage");
var ServiceSupportPage_1 = require("../pages/ServiceSupportPage");
var TaxationPage_1 = require("../pages/TaxationPage");
var AdminPanelPage_1 = require("../pages/AdminPanelPage");
var AppRouter = function () {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Layout_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Route, { index: true, element: react_1["default"].createElement(MainPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "about", element: react_1["default"].createElement(AboutFundPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "business", element: react_1["default"].createElement(BusinessPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "contacts", element: react_1["default"].createElement(ContactPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "info", element: react_1["default"].createElement(InfoDisclosurePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "investment", element: react_1["default"].createElement(InvestmentPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "managment", element: react_1["default"].createElement(ManagementPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "news", element: react_1["default"].createElement(News_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "news/:id", element: react_1["default"].createElement(NewsPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(NotFoundPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "support", element: react_1["default"].createElement(ServiceSupportPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "taxation", element: react_1["default"].createElement(TaxationPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "adminpanel", element: react_1["default"].createElement(AdminPanelPage_1["default"], null) }))));
};
exports["default"] = AppRouter;
