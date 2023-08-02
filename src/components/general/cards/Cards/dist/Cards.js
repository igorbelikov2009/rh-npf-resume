"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CardsItem_1 = require("../CardsItem/CardsItem");
var Cards_module_scss_1 = require("./Cards.module.scss");
var Cards = function (_a) {
    var cards = _a.cards;
    return (react_1["default"].createElement("section", { className: Cards_module_scss_1["default"]["cards"] },
        react_1["default"].createElement("h2", { className: Cards_module_scss_1["default"]["cards__heading"] }, "\u0424\u043E\u043D\u0434 \u0432 \u0446\u0438\u0444\u0440\u0430\u0445"),
        react_1["default"].createElement("div", { className: Cards_module_scss_1["default"]["cards__cards"] }, cards.map(function (card) { return (react_1["default"].createElement(CardsItem_1["default"], { key: card.icon, icon: card.icon, span: card.span, title: card.title, subtitle: card.subtitle })); }))));
};
exports["default"] = Cards;
