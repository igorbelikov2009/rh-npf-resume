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
var useDate_1 = require("../../../api/useDate/useDate");
var redux_1 = require("../../../hooks/redux");
var newsReducer_1 = require("../../../store/reducers/newsReducer");
var ServerError_1 = require("../../general/ServerError/ServerError");
var ServerIsLoading_1 = require("../../general/ServerIsLoading/ServerIsLoading");
var AdaptiveRadio_1 = require("../../ui/radios/AdaptiveRadio/AdaptiveRadio");
var SelectorAndOptionBlock_1 = require("../../ui/select/SelectorAndOptionBlock/SelectorAndOptionBlock");
var NewsLink_1 = require("../NewsLink/NewsLink");
var ListNews_module_scss_1 = require("./ListNews.module.scss");
var ListNews = function () {
    var _a = react_1.useState("2021"), selectedYear = _a[0], setSelectedYear = _a[1];
    var _b = react_1.useState("0"), setId = _b[1];
    var _c = react_1.useState(false), isVisible = _c[0], setRadioListVisible = _c[1];
    // Получаем данные с newsReducer,
    var dispatch = redux_1.useAppDispatch();
    var _d = redux_1.useAppSelector(function (state) { return state.newsReducer; }), news = _d.news, isLoading = _d.isLoading, error = _d.error;
    react_1.useEffect(function () {
        dispatch(newsReducer_1.getNews());
    }, [dispatch]);
    // Из полученных данных создаём radioYears (optionsItems)
    var optionsItems = __spreadArrays(news).map(function (item) { return new Date(item.date).getFullYear(); })
        // Сортируем массив по возрастанию
        .sort(function (a, b) { return b - a; })
        // Фильтруем массив, оставляем только уникальные значения.
        .filter(function (elem, index, array) { return array.indexOf(elem) === index; })
        // Создаём массив объектов с ключами:
        .map(function (item, index) { return ({
        id: String(index),
        date: String(item),
        value: String(item)
    }); });
    // новости, отфильтрованные по годам
    var newsFilteredByYear = react_1.useMemo(function () {
        return __spreadArrays(news).filter(function (item) {
            return new Date(item.date).getFullYear() === Number(selectedYear);
        });
    }, [news, selectedYear]);
    // форматируем дату у новостей, отфильтрованных по годам
    var formatedFilteredByYear = react_1.useMemo(function () {
        return __spreadArrays(newsFilteredByYear).map(function (item) { return ({
            id: Number(item.id),
            title: String(item.title),
            date: String(useDate_1["default"].format(new Date(item.date))),
            paragraphs: item.paragraphs
        }); });
    }, [newsFilteredByYear]);
    var onClickSelector = function () {
        setRadioListVisible(function (prev) { return !prev; });
    };
    var onChangeRadio = function (value, id) {
        setSelectedYear(value);
        setId(id);
    };
    var onClickRadio = function () {
        setRadioListVisible(false);
    };
    var onChangeAdaptiveRadio = function (value, id) {
        setSelectedYear(value);
        setId(id);
    };
    return (react_1["default"].createElement("section", { className: ListNews_module_scss_1["default"]["news__section"] },
        react_1["default"].createElement(react_1["default"].Fragment, null,
            isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
            error && react_1["default"].createElement(ServerError_1["default"], null)),
        react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["news__container-select-radio"] },
            react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["news__select"] },
                react_1["default"].createElement(SelectorAndOptionBlock_1["default"], { currentValue: selectedYear, optionsItems: optionsItems, isVisible: isVisible, onClickSelector: onClickSelector, emitOnChangeRadio: onChangeRadio, emitOnClickRadio: onClickRadio })),
            react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["news__radio"] },
                react_1["default"].createElement(AdaptiveRadio_1["default"], { currentValue: selectedYear, optionsItems: optionsItems, emitValue: onChangeAdaptiveRadio }))),
        react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["news__container-news"] },
            react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["news__list-news"] }, formatedFilteredByYear.map(function (item) { return (react_1["default"].createElement(NewsLink_1["default"], { key: item.id, date: item.date, title: item.title, id: item.id })); })),
            react_1["default"].createElement("div", { className: ListNews_module_scss_1["default"]["contact"] },
                react_1["default"].createElement("p", { className: ListNews_module_scss_1["default"]["contact__header"] }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u043F\u0440\u0435\u0441\u0441-\u0441\u043B\u0443\u0436\u0431\u044B"),
                react_1["default"].createElement("p", { className: ListNews_module_scss_1["default"]["contact__adress"] }, "115114, \u0420\u043E\u0441\u0441\u0438\u044F, \u041C\u043E\u0441\u043A\u0432\u0430, \u0414\u0435\u0440\u0431\u0435\u043D\u0435\u0432\u0441\u043A\u0430\u044F \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430\u044F, 7, \u0441\u0442\u0440. 22, \u043F\u043E\u0434\u044A\u0435\u0437\u0434 B, 3 \u044D\u0442\u0430\u0436"),
                react_1["default"].createElement("p", { className: ListNews_module_scss_1["default"]["contact__phone"] }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: 8 (495) 933-47-66")))));
};
exports["default"] = ListNews;
