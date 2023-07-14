"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Slider_module_scss_1 = require("./Slider.module.scss");
var Slider = function (_a) {
    var title = _a.title, name = _a.name, min = _a.min, max = _a.max, step = _a.step, value = _a.value, emitValue = _a.emitValue;
    var _b = react_1.useState(value), currentValue = _b[0], setCurrentValue = _b[1];
    var sliderHandler = function (event) {
        setCurrentValue(Number(event.target.value));
        // console.log(Number(event.target.value));
        value = Number(event.target.value);
        emitValue(Number(event.target.value));
    };
    return (react_1["default"].createElement("div", { className: Slider_module_scss_1["default"]["slider"] },
        react_1["default"].createElement("div", { className: Slider_module_scss_1["default"]["slider__description"] },
            react_1["default"].createElement("p", { className: Slider_module_scss_1["default"]["slider__title"] }, title),
            react_1["default"].createElement("p", { className: Slider_module_scss_1["default"]["slider__output"] }, currentValue)),
        react_1["default"].createElement("input", { className: Slider_module_scss_1["default"]["slider-bicolor"], type: "range", name: name, min: min, max: max, step: step, value: currentValue, onChange: sliderHandler })));
};
exports["default"] = Slider;
