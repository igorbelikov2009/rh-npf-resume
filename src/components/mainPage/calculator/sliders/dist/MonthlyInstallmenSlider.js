"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Slider_1 = require("../../../ui/Slider/Slider");
var MonthlyInstallmenSlider = function (_a) {
    var monthlyInstallmenSliderHandler = _a.monthlyInstallmenSliderHandler;
    var monthlyInstallmenSlider = {
        title: "Ежемесячный взнос, р.",
        name: "monthlyInstallment",
        min: 0,
        max: 50000,
        step: 500,
        value: 5000,
        emitValue: function (event) {
            throw new Error("Function not implemented.");
        }
    };
    return (react_1["default"].createElement(Slider_1["default"], { title: monthlyInstallmenSlider.title, name: monthlyInstallmenSlider.name, min: monthlyInstallmenSlider.min, max: monthlyInstallmenSlider.max, step: monthlyInstallmenSlider.step, value: monthlyInstallmenSlider.value, emitValue: monthlyInstallmenSliderHandler }));
};
exports["default"] = MonthlyInstallmenSlider;
