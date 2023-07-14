"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Slider_1 = require("../../../ui/Slider/Slider");
var PeriodPaymentPensionSlider = function (_a) {
    var periodPaymentPensionSliderHandler = _a.periodPaymentPensionSliderHandler;
    var periodPaymentPensionSlider = {
        title: "Срок выплаты пенсии, лет",
        name: "periodPaymentPension",
        min: 5,
        max: 30,
        step: 1,
        value: 15,
        emitValue: function (event) {
            throw new Error("Function not implemented.");
        }
    };
    return (react_1["default"].createElement(Slider_1["default"], { title: periodPaymentPensionSlider.title, name: periodPaymentPensionSlider.name, min: periodPaymentPensionSlider.min, max: periodPaymentPensionSlider.max, step: periodPaymentPensionSlider.step, value: periodPaymentPensionSlider.value, emitValue: periodPaymentPensionSliderHandler }));
};
exports["default"] = PeriodPaymentPensionSlider;
