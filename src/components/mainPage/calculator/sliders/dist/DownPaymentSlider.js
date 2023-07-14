"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Slider_1 = require("../../../ui/Slider/Slider");
var DownPaymentSlider = function (_a) {
    var downPaymentSliderHandler = _a.downPaymentSliderHandler;
    var downPaymentSlider = {
        title: " Первоначальный взнос, р",
        name: "downPayment",
        min: 0,
        max: 1000000,
        step: 10000,
        value: 10000,
        emitValue: function (event) {
            throw new Error("Function not implemented.");
        }
    };
    return (react_1["default"].createElement(Slider_1["default"], { title: downPaymentSlider.title, name: downPaymentSlider.name, min: downPaymentSlider.min, max: downPaymentSlider.max, step: downPaymentSlider.step, value: downPaymentSlider.value, emitValue: downPaymentSliderHandler }));
};
exports["default"] = DownPaymentSlider;
