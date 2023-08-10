"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var useDate_1 = require("../api/useDate/useDate");
var NewsItem_1 = require("../components/adminPanel/NewsItem/NewsItem");
var ServerError_1 = require("../components/general/ServerError/ServerError");
var ServerIsLoading_1 = require("../components/general/ServerIsLoading/ServerIsLoading");
var MyModal_1 = require("../components/modal/MyModal/MyModal");
var context_1 = require("../context");
var newsAPI_1 = require("../store/services/newsAPI");
require("../styles/AdminPanel.scss");
var AdminPanel = function () {
    var setBackgroundWhite = react_1.useContext(context_1.AuthContext).setBackgroundWhite;
    // Получение данных =======================================================
    // // Получаем данные с newsReducer,
    // const dispatch = useAppDispatch();
    // const { news, isLoading, error } = useAppSelector((state) => state.newsReducer);
    // useEffect(() => {
    //   dispatch(getNews());
    // }, [dispatch]);
    // // Получаем данные с сервера через service newsAPI
    var _a = newsAPI_1.useFetchNewsQuery(), data = _a.data, isLoading = _a.isLoading, error = _a.error;
    var news = [];
    if (data) {
        news = data;
    }
    // Сортируем полученные данные:
    var newsSortedByDate = __spreadArrays(news).sort(function (a, b) {
        return new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1;
    });
    // Далее, в массиве новостей мы форматируем дату
    var formatedDateNews = __spreadArrays(newsSortedByDate).map(function (item) { return ({
        id: Number(item.id),
        title: String(item.title),
        date: String(useDate_1["default"].format(new Date(item.date))),
        paragraphs: item.paragraphs
    }); });
    // Создание, добавление =======================================================
    // Для создания нового объекта (newsItem) достаём сгенерированный в newsAPI
    //               хук useAddNewsMutation()
    var _b = newsAPI_1.useAddNewsMutation(), addNews = _b[0], isLoadingAdding = _b[1].isLoading;
    // title, date, paragraphs для создания нового объекта (newsItem)
    var _c = react_1.useState(""), title = _c[0], setTitle = _c[1];
    var _d = react_1.useState(""), date = _d[0], setDate = _d[1];
    var _e = react_1.useState([]), paragraphs = _e[0], setParagraphs = _e[1];
    var _f = react_1.useState([]), info = _f[0], setInfo = _f[1];
    var _g = react_1.useState(false), modal = _g[0], setModal = _g[1];
    var addInfo = function () {
        // Здесь вызываем функцию setInfo, которая изменяет состояние. В неё передаём массив,
        // в нём разворачиваем старый массив информации и добавляем в него новый элемент:
        // { paragraph: "", number: Date.now() }
        // number (идентификатор) получаем из времени.
        // Без идентификатора функция changeInfo срабатывает одинаково на всех полях info.
        setInfo(__spreadArrays(info, [{ paragraph: "", number: Date.now() }]));
        // console.log(info);
    };
    // Параметром передаём номер number, полученный из времени
    var removeInfo = function (num) {
        // Здесь вызываем функцию setInfo, которая изменяет состояние. По существующему массиву
        // с помощью фунции filter пробегаемся и проверяем: совпадает ли номер элемента
        // с номером, который мы передали параметром.
        setInfo(info.filter(function (item) { return item.number !== num; }));
        // console.log(info);
    };
    var changeInfo = function (key, value, number) {
        setInfo(info.map(function (i) {
            var _a;
            return (i.number === number ? __assign(__assign({}, i), (_a = {}, _a[key] = value, _a)) : i);
        }));
        setParagraphs(info.map(function (item) { return item.paragraph; }));
    };
    // Создаём новый объект (newsItem), как аргумент:
    // Для addNews на этой странице, строка 77.
    // Как body для addNews в newsAPI, строка 19, 22.
    var newsItem = {
        id: 0,
        title: title,
        date: date,
        paragraphs: paragraphs
    };
    var handleAddNewsItem = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(newsItem.title && newsItem.date && newsItem.paragraphs)) return [3 /*break*/, 2];
                    return [4 /*yield*/, addNews(newsItem).unwrap()];
                case 1:
                    _a.sent();
                    // console.log(newsItem);
                    setTitle("");
                    setDate("");
                    setInfo([]);
                    setModal(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleModal = function () {
        setModal(function (prev) { return !prev; });
    };
    react_1.useEffect(function () {
        if (modal) {
            document.body.style.overflow = "hidden";
            setBackgroundWhite(false);
        }
        else {
            document.body.style.overflow = "";
            setBackgroundWhite(true);
        }
    }, [modal, setBackgroundWhite]);
    // // Для удаления достаём сгенерированный в newsAPI хук useDeleteNewsMutation
    var _h = newsAPI_1.useDeleteNewsMutation(), deleteNews = _h[0], isLoadingDelete = _h[1].isLoading;
    var handleDeleteNews = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteNews(id).unwrap()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "admin-panel" },
        react_1["default"].createElement(react_1["default"].Fragment, null,
            (isLoading || isLoadingAdding) && react_1["default"].createElement(ServerIsLoading_1["default"], null),
            error && react_1["default"].createElement(ServerError_1["default"], null)),
        react_1["default"].createElement("div", { className: "admin-panel__container" },
            react_1["default"].createElement("div", { className: "admin-panel__container-input-button" },
                react_1["default"].createElement(react_bootstrap_1.Button, { variant: modal ? "outline-danger" : "primary", onClick: handleModal }, modal ? "Закрыть панель администратора" : "Открыть панель администратора")),
            react_1["default"].createElement("h1", { className: "admin-panel__heading" }, " \u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 "),
            react_1["default"].createElement(react_1["default"].Fragment, null, formatedDateNews &&
                formatedDateNews.map(function (item) { return (react_1["default"].createElement(NewsItem_1["default"], { key: item.id, id: item.id, title: item.date, date: item.date, paragraphs: item.paragraphs, handlerRemove: function () { return handleDeleteNews(item.id); } })); })),
            react_1["default"].createElement(framer_motion_1.AnimatePresence, null, modal && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
                react_1["default"].createElement(MyModal_1["default"], { isVisible: modal, setVisible: setModal },
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { value: title, onChange: function (e) { return setTitle(e.target.value); }, className: "admin-panel__container-input-button", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439" }),
                        react_1["default"].createElement("h4", { className: "admin-panel__paragraph" }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439"),
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: "date", id: "start", name: "trip-start", min: "2015-01-01", max: "2022-12-31", value: date, onChange: function (e) { return setDate(e.target.value); }, className: "admin-panel__container-input-button" }),
                        react_1["default"].createElement(react_bootstrap_1.Button, { className: "admin-panel__container-input-button", variant: "outline-success", onClick: function () { return addInfo(); } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u0433\u0440\u0430\u0444"),
                        info.map(function (i, index) { return (react_1["default"].createElement(react_bootstrap_1.Row, { key: index },
                            react_1["default"].createElement(react_bootstrap_1.Col, { md: 11 },
                                react_1["default"].createElement(react_bootstrap_1.Form.Control, { className: "admin-panel__container-input-button", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043F\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439", value: i.paragraph, onChange: function (e) {
                                        //  const changeInfo = (key, value, number) => ...
                                        return changeInfo("paragraph", e.target.value, i.number);
                                    } })),
                            react_1["default"].createElement(react_bootstrap_1.Col, { md: 1 },
                                react_1["default"].createElement(react_bootstrap_1.Button, { variant: "outline-danger", onClick: function () { return removeInfo(i.number); } }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))); })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(react_bootstrap_1.Button, { variant: "outline-success", onClick: handleAddNewsItem }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439")))))))));
};
exports["default"] = AdminPanel;
