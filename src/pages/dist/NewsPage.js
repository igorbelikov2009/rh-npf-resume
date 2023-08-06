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
var react_router_dom_1 = require("react-router-dom");
var useDate_1 = require("../api/useDate/useDate");
var ServerError_1 = require("../components/general/ServerError/ServerError");
var ServerIsLoading_1 = require("../components/general/ServerIsLoading/ServerIsLoading");
var TripleIcon_1 = require("../components/general/TripleIcon/TripleIcon");
var NewsLink_1 = require("../components/news/NewsLink/NewsLink");
var Article_1 = require("../components/newsPage/Article/Article");
var redux_1 = require("../hooks/redux");
var newsReducer_1 = require("../store/reducers/newsReducer");
require("../styles/NewsPage.scss");
var NewsPage = function () {
    var id = react_router_dom_1.useParams().id;
    var prevID = Number(id) - 1;
    var nextID = Number(id) + 1;
    var _a = react_1.useState(false), isHovered = _a[0], setHovered = _a[1];
    // Получаем данные с newsReducer,
    var dispatch = redux_1.useAppDispatch();
    var _b = redux_1.useAppSelector(function (state) { return state.newsReducer; }), news = _b.news, isLoading = _b.isLoading, error = _b.error;
    react_1.useEffect(function () {
        dispatch(newsReducer_1.getNews());
    }, [dispatch]);
    // Фильтруем массив всех отсортированных новостей, с упорядоченным id, с отформатированной датой
    // Оставляем в массиве только те новости, ID которых соответствуют prevID и nextID.
    var anotherNews = __spreadArrays(news).filter(function (item) {
        return item.id === prevID || item.id === nextID;
    });
    // Форматируем дату других новостей:
    var formatedAnotherNews = __spreadArrays(anotherNews).map(function (item) { return ({
        id: Number(item.id),
        title: String(item.title),
        date: String(useDate_1["default"].format(new Date(item.date))),
        paragraphs: item.paragraphs
    }); });
    // Оставляем в массиве только те новости, ID которых соответствуют id.
    var currentNews = __spreadArrays(news).filter(function (item) {
        return item.id === Number(id);
    });
    // форматируем дату текущих новостей:
    var formatedCurrentNews = __spreadArrays(currentNews).map(function (item) { return ({
        id: Number(item.id),
        title: String(item.title),
        date: String(useDate_1["default"].format(new Date(item.date))),
        paragraphs: item.paragraphs
    }); });
    return (react_1["default"].createElement("div", { className: "news-page" },
        react_1["default"].createElement("div", { className: "news-page__head" },
            react_1["default"].createElement("div", null,
                isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
                error && react_1["default"].createElement(ServerError_1["default"], null)),
            react_1["default"].createElement("div", { className: "news-page__container" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/news", className: "news-page__link-to-news", onMouseOver: function () { return setHovered(true); }, onMouseOut: function () { return setHovered(false); } },
                    react_1["default"].createElement("div", { className: "news-page__icons" },
                        react_1["default"].createElement(TripleIcon_1["default"], { hovered: isHovered, light: false, icon: "Arrow Down" })),
                    react_1["default"].createElement("p", { className: "news-page__link-title" }, "\u041A \u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439")),
                formatedCurrentNews ? (formatedCurrentNews.map(function (item) { return (react_1["default"].createElement(Article_1["default"], { key: item.id, id: item.id, date: item.date, title: item.date, paragraphs: item.paragraphs })); })) : (react_1["default"].createElement("div", null,
                    " \u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0441 ID ",
                    id,
                    " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")),
                formatedAnotherNews &&
                    formatedAnotherNews.map(function (item) { return (react_1["default"].createElement(NewsLink_1["default"], { key: item.id, date: item.date, title: item.title, id: Number(item.id) })); })))));
};
exports["default"] = NewsPage;
