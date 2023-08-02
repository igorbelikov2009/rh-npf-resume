"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../DarkIcon/DarkIcon");
var CardsItem_module_scss_1 = require("./CardsItem.module.scss");
var CardsItem = function (_a) {
    var icon = _a.icon, title = _a.title, subtitle = _a.subtitle, span = _a.span;
    return (react_1["default"].createElement("div", { className: CardsItem_module_scss_1["default"]["cards-item"] },
        react_1["default"].createElement("div", { className: CardsItem_module_scss_1["default"]["cards-item__icon"] },
            react_1["default"].createElement(DarkIcon_1["default"], { icon: icon })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", { className: CardsItem_module_scss_1["default"]["cards-item__title"] },
                title,
                react_1["default"].createElement("span", { className: CardsItem_module_scss_1["default"]["cards-item__span"] },
                    " ",
                    span,
                    " ")),
            react_1["default"].createElement("p", { className: CardsItem_module_scss_1["default"]["cards-item__subtitle"] }, subtitle))));
};
exports["default"] = CardsItem;
