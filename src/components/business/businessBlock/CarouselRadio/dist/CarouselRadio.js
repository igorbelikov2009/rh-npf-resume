"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CarouselRadio_module_scss_1 = require("./CarouselRadio.module.scss");
var CarouselRadio = function (_a) {
    var value = _a.value, emitValue = _a.emitValue;
    var onChangeCarouselRadio = function (event) {
        emitValue(event.target.value);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { type: "radio", name: "card", value: value, onChange: onChangeCarouselRadio, className: CarouselRadio_module_scss_1["default"]["carousel__radio"] })));
};
exports["default"] = CarouselRadio;
