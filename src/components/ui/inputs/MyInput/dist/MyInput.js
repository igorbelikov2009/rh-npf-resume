"use strict";
exports.__esModule = true;
// В проекте не учавствует, оставил для себя
var react_1 = require("react");
var InputField_1 = require("../InputField/InputField");
var InputTitle_1 = require("../InputTitle/InputTitle");
var MyInput_module_scss_1 = require("./MyInput.module.scss");
var MyInput = function (_a) {
    var type = _a.type, // тип поля
    name = _a.name, // название поля
    minLength = _a.minLength, // с хуком не надо
    maxLength = _a.maxLength, // с хуком не надо
    title = _a.title, // название подсказки
    validationError = _a.validationError, // с хуком не надо
    isRequiredError = _a.isRequiredError, // с хуком не надо
    isValidationError = _a.isValidationError, // с хуком не надо
    emitValue = _a.emitValue;
    var _b = react_1.useState(true), isDormancy = _b[0], setDormancy = _b[1];
    var _c = react_1.useState(false), isError = _c[0], setError = _c[1];
    var onFocus = function () {
        setDormancy(false);
    };
    var onBlur = function () {
        setDormancy(true);
    };
    var onChangeInput = function (value) {
        emitValue(value);
        if (minLength) {
            setError(value.length > minLength);
        }
        console.log(value);
    };
    // console.log("isDormancy :" + isDormancy, "isError :" + isError);
    return (react_1["default"].createElement("label", { className: MyInput_module_scss_1["default"]["my-input__label"] },
        react_1["default"].createElement(InputTitle_1["default"], { title: title, isDormancy: isDormancy }),
        react_1["default"].createElement(InputField_1["default"], { type: type, name: name, emitValue: onChangeInput, emitFocus: onFocus, emitBlur: onBlur, isError: isError }),
        isRequiredError && (react_1["default"].createElement("p", { className: MyInput_module_scss_1["default"]["my-input__error"], "v-if": "$v.valueInput.$dirty && !$v.valueInput.required" }, "\"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435\"")),
        isValidationError && (react_1["default"].createElement("p", { className: MyInput_module_scss_1["default"]["my-input__error"], "v-if": "$v.valueInput.$dirty && !$v.valueInput.minLength" }, validationError))));
};
exports["default"] = MyInput;
