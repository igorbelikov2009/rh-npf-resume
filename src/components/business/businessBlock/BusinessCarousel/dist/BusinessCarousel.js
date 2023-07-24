"use strict";
exports.__esModule = true;
var react_1 = require("react");
var getCardsBusinessCarouselAPI_1 = require("../../../../store/services/getCardsBusinessCarouselAPI");
var CarouselCard_1 = require("../CarouselCard/CarouselCard");
var BusinessCarousel_module_scss_1 = require("./BusinessCarousel.module.scss");
var BusinessCarousel = function (_a) {
    var currentValue = _a.currentValue, emitAmountChildren = _a.emitAmountChildren, emitValue = _a.emitValue;
    var data = getCardsBusinessCarouselAPI_1.cardsBusinessCarouselAPI.useGetCardsBusinessCarouselQuery().data;
    var cardsBusinessCarousel = [];
    if (data) {
        cardsBusinessCarousel = data;
    }
    react_1.useEffect(function () {
        emitAmountChildren(cardsBusinessCarousel.length);
    }, [cardsBusinessCarousel.length, emitAmountChildren]);
    var onChangeCarouselRadio = function (value) {
        emitValue(value);
    };
    return (react_1["default"].createElement("div", { className: BusinessCarousel_module_scss_1["default"]["carousel__container"] }, cardsBusinessCarousel.map(function (card, index) { return (react_1["default"].createElement(CarouselCard_1["default"], { key: index, icon: card.icon, title: card.title, value: card.value, emitValue: onChangeCarouselRadio, isActive: index === currentValue })); })));
};
exports["default"] = BusinessCarousel;
