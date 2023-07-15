"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TripleIcon_1 = require("../../../general/TripleIcon/TripleIcon");
var CarouselRadio_1 = require("../CarouselRadio/CarouselRadio");
var CarouselCard_module_scss_1 = require("./CarouselCard.module.scss");
var CarouselCard = function (_a) {
    var isActive = _a.isActive, value = _a.value, icon = _a.icon, title = _a.title, emitValue = _a.emitValue;
    var _b = react_1.useState(false), isHovered = _b[0], setIsHovered = _b[1];
    var handlerRadio = function (value) {
        emitValue(value);
    };
    return (react_1["default"].createElement("label", { onMouseOver: function () { return setIsHovered(true); }, onMouseOut: function () { return setIsHovered(false); }, className: isActive ? CarouselCard_module_scss_1["default"]["carousel__card_actived"] : CarouselCard_module_scss_1["default"]["carousel__card"] },
        react_1["default"].createElement(CarouselRadio_1["default"], { value: value, emitValue: handlerRadio }),
        react_1["default"].createElement("div", { className: CarouselCard_module_scss_1["default"]["carousel__container-icons"] },
            react_1["default"].createElement(TripleIcon_1["default"], { hovered: isHovered, icon: icon, light: false })),
        react_1["default"].createElement("p", { className: CarouselCard_module_scss_1["default"]["carousel__title"] },
            " ",
            title,
            " ")));
};
exports["default"] = CarouselCard;
