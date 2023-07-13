"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CardsCard_module_scss_1 = require("./CardsCard.module.scss");
var DarkIcon_1 = require("../../DarkIcon/DarkIcon");
var CardsCard = function (_a) {
    var icon = _a.icon, title = _a.title, span = _a.span, subtitle = _a.subtitle;
    return (react_1["default"].createElement("div", { className: CardsCard_module_scss_1["default"]["cards-card"] },
        react_1["default"].createElement("div", { className: CardsCard_module_scss_1["default"]["cards-card__icon"] },
            react_1["default"].createElement(DarkIcon_1["default"], { icon: icon })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", { className: CardsCard_module_scss_1["default"]["cards-card__title"] },
                title,
                react_1["default"].createElement("span", { className: CardsCard_module_scss_1["default"]["cards-card__span"] },
                    " ",
                    span,
                    " ")),
            react_1["default"].createElement("p", { className: CardsCard_module_scss_1["default"]["cards-card__subtitle"] }, subtitle))));
};
exports["default"] = CardsCard;
