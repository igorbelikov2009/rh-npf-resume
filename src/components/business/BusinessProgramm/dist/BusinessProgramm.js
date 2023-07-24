"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../general/DarkIcon/DarkIcon");
var BusinessProgramm_module_scss_1 = require("./BusinessProgramm.module.scss");
var businessCardsAPI_1 = require("../../../store/services/businessCardsAPI");
var ServerIsLoading_1 = require("../../general/ServerIsLoading/ServerIsLoading");
var ServerError_1 = require("../../general/ServerError/ServerError");
var BusinessProgramm = function () {
    var _a = businessCardsAPI_1.businessCardsAPI.useGetBusinessCardsAPIQuery(), data = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    var businessCards = [];
    if (data) {
        businessCards = data;
    }
    return (react_1["default"].createElement("section", { className: BusinessProgramm_module_scss_1["default"]["business-programm"] },
        react_1["default"].createElement("div", { className: BusinessProgramm_module_scss_1["default"]["business-programm__container"] },
            react_1["default"].createElement("div", { className: BusinessProgramm_module_scss_1["default"]["business-programm__header"] },
                react_1["default"].createElement("h1", { className: BusinessProgramm_module_scss_1["default"]["business-programm__heading"] }, "\u041A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430")),
            react_1["default"].createElement("div", { className: BusinessProgramm_module_scss_1["default"]["business-programm__block"] },
                isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
                isError && react_1["default"].createElement(ServerError_1["default"], null),
                businessCards &&
                    businessCards.map(function (card, index) { return (react_1["default"].createElement("div", { key: index, className: BusinessProgramm_module_scss_1["default"]["card"] },
                        react_1["default"].createElement("div", { className: BusinessProgramm_module_scss_1["default"]["card__top-block"] },
                            react_1["default"].createElement("div", { className: BusinessProgramm_module_scss_1["default"]["card__icon"] },
                                react_1["default"].createElement(DarkIcon_1["default"], { icon: card.icon })),
                            react_1["default"].createElement("h2", { className: BusinessProgramm_module_scss_1["default"]["card__header"] }, card.header)),
                        react_1["default"].createElement("div", { className: BusinessProgramm_module_scss_1["default"]["card__titles"] }, card.titles.map(function (title, index) { return (react_1["default"].createElement("p", { key: index, className: BusinessProgramm_module_scss_1["default"]["card__title"] }, title)); })))); })))));
};
exports["default"] = BusinessProgramm;
