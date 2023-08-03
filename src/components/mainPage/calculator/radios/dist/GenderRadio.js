"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioSecondary_1 = require("../../../ui/radios/RadioSecondary/RadioSecondary");
var GenderRadio = function (_a) {
    var ageMan = _a.ageMan, ageWoman = _a.ageWoman, genderValue = _a.genderValue, onChangeGenderRadio = _a.onChangeGenderRadio;
    var optionsItems = [
        { value: ageMan, title: "М", name: "gender" },
        { value: ageWoman, title: "Ж", name: "gender" },
    ];
    return react_1["default"].createElement(RadioSecondary_1["default"], { optionsItems: optionsItems, emitValue: onChangeGenderRadio, currentValue: genderValue });
};
exports["default"] = GenderRadio;
