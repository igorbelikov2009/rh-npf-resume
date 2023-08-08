"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Slider_module_scss_1 = require("./Slider.module.scss");
var SliderString = function (_a) {
    var emitValue = _a.emitValue, max = _a.max, min = _a.min, name = _a.name, step = _a.step, title = _a.title, value = _a.value;
    var _b = react_1.useState(value), currentValue = _b[0], setCurrentValue = _b[1];
    var handlerSlider = function (event) {
        setCurrentValue(event.target.value);
        emitValue(event.target.value);
        console.log(event.target.value);
    };
    return (react_1["default"].createElement("div", { className: Slider_module_scss_1["default"]["slider"] },
        react_1["default"].createElement("div", { className: Slider_module_scss_1["default"]["slider__description"] },
            react_1["default"].createElement("p", { className: Slider_module_scss_1["default"]["slider__title"] },
                " ",
                title),
            react_1["default"].createElement("p", { className: Slider_module_scss_1["default"]["slider__output"] },
                " ",
                currentValue,
                " ")),
        react_1["default"].createElement("input", { className: Slider_module_scss_1["default"]["slider-bicolor"], type: "range", name: name, min: min, max: max, step: step, value: currentValue, onChange: handlerSlider })));
};
exports["default"] = SliderString;
