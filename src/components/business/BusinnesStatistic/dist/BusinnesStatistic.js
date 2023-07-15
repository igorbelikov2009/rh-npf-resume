"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CardsBusinnesStatistic_1 = require("../../../data/dist/CardsBusinnesStatistic");
var DarkIcon_1 = require("../../general/DarkIcon/DarkIcon");
var BusinnesStatistic_module_scss_1 = require("./BusinnesStatistic.module.scss");
var BusinnesStatistic = function () {
    return (react_1["default"].createElement("section", { className: BusinnesStatistic_module_scss_1["default"]["businnes-statistic"] },
        react_1["default"].createElement("h2", { className: BusinnesStatistic_module_scss_1["default"]["businnes-statistic__heading"] }, "\u0414\u043B\u044F \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u043E\u0444\u0438\u0441 \u0424\u043E\u043D\u0434\u0430. \u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u0431\u0443\u0434\u0435\u0442 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u0430\u0432\u0438\u043B \u0424\u043E\u043D\u0434\u0430 \u043F\u043E \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u043E\u0439 \u0421\u0445\u0435\u043C\u0435 1, \u0441 \u0438\u043C\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0441\u0447\u0435\u0442\u0430\u043C\u0438 \u0438\u043B\u0438 \u0421\u0445\u0435\u043C\u0435 2. \u0421 \u0441\u043E\u043B\u0438\u0434\u0430\u0440\u043D\u044B\u043C \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u043C \u0441\u0447\u0435\u0442\u043E\u043C."),
        react_1["default"].createElement("h2", { className: BusinnesStatistic_module_scss_1["default"]["businnes-statistic__subheading"] }, "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0424\u043E\u043D\u0434\u0430"),
        react_1["default"].createElement("div", { className: BusinnesStatistic_module_scss_1["default"]["businnes-statistic__container"] }, CardsBusinnesStatistic_1.cardsBusinnesStatistic.map(function (card, index) { return (react_1["default"].createElement("div", { key: index, className: BusinnesStatistic_module_scss_1["default"]["businnes-statistic__card"] },
            react_1["default"].createElement("div", { className: BusinnesStatistic_module_scss_1["default"]["businnes-statistic__icon"] },
                react_1["default"].createElement(DarkIcon_1["default"], { icon: card.icon })),
            react_1["default"].createElement("p", { className: BusinnesStatistic_module_scss_1["default"]["businnes-statistic__title"] }, card.subtitle))); }))));
};
exports["default"] = BusinnesStatistic;
