"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var UserDate_1 = require("../api/UserDate/UserDate");
var NewsItem_1 = require("../components/adminPanel/NewsItem/NewsItem");
var context_1 = require("../context");
var newsData_1 = require("../data/newsData");
require("../styles/AdminPanel.scss");
var AdminPanel = function () {
    var setBackgroundWhite = react_1.useContext(context_1.AuthContext).setBackgroundWhite;
    var data = newsData_1.news;
    // Полученный массив новостей сортируем по дате
    var newsSortedByDate = __spreadArrays(newsData_1.news).sort(function (a, b) {
        return new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1;
    });
    // Далее, в массиве новостей мы форматируем дату
    var formatedDateNews = __spreadArrays(newsSortedByDate).map(function (item) { return ({
        id: Number(item.id),
        title: String(item.title),
        date: String(UserDate_1["default"].format(new Date(item.date))),
        paragraphs: item.paragraphs
    }); });
    // title, date, paragraphs для создания нового объекта (newsItem)
    var _a = react_1.useState(""), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(""), date = _b[0], setDate = _b[1];
    var _c = react_1.useState([]), paragraphs = _c[0], setParagraphs = _c[1];
    var _d = react_1.useState([]), info = _d[0], setInfo = _d[1];
    var _e = react_1.useState(false), modal = _e[0], setModal = _e[1];
    var handlerModal = function () {
        setModal(function (prev) { return !prev; });
    };
    var handleDeleteNews = function () {
        console.log("delete");
    };
    return (react_1["default"].createElement("div", { className: "admin-panel" },
        react_1["default"].createElement("div", { className: "admin-panel__container" },
            react_1["default"].createElement("div", { className: "admin-panel__container-input-button" },
                react_1["default"].createElement(react_bootstrap_1.Button, { variant: modal ? "outline-danger" : "primary", onClick: handlerModal }, modal ? "Закрыть панель администратора" : "Открыть панель администратора")),
            react_1["default"].createElement("h1", { className: "admin-panel__heading" }, " \u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 "),
            react_1["default"].createElement("div", null, newsData_1.news &&
                newsData_1.news.map(function (item) { return (react_1["default"].createElement(NewsItem_1["default"], { key: item.id, id: item.id, title: item.date, date: item.date, paragraphs: item.paragraphs, handlerRemove: handleDeleteNews })); })))));
};
exports["default"] = AdminPanel;
