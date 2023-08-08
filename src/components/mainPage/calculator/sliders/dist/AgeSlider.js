"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Slider_1 = require("../../../ui/Slider");
var AgeSlider = function (_a) {
    var ageSliderMax = _a.ageSliderMax, ageSliderHandler = _a.ageSliderHandler;
    var ageSlider = {
        title: "Возраст, лет",
        name: "ageSlider",
        min: "18",
        max: ageSliderMax,
        step: "1",
        value: "30",
        emitValue: function (event) {
            throw new Error("Function not implemented.");
        }
    };
    return (react_1["default"].createElement(Slider_1["default"], { title: ageSlider.title, name: ageSlider.name, min: ageSlider.min, max: ageSlider.max, step: ageSlider.step, value: ageSlider.value, emitValue: ageSliderHandler }));
};
exports["default"] = AgeSlider;
