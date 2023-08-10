"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var InputSubmit_1 = require("../../ui/inputs/InputSubmit/InputSubmit");
var InputTitle_1 = require("../../ui/inputs/InputTitle/InputTitle");
var BusinnesForm_module_scss_1 = require("./BusinnesForm.module.scss");
var BusinnesForm = function () {
    var _a, _b, _c;
    var _d = react_1.useState(true), isDormancyUserName = _d[0], setDormancyUserName = _d[1];
    var _e = react_1.useState(true), isDormancyPhone = _e[0], setDormancyPhone = _e[1];
    var _f = react_1.useState(true), isDormancyEmail = _f[0], setDormancyEmail = _f[1];
    var _g = react_1.useState(true), isDormancyCompanyName = _g[0], setDormancyCompanyName = _g[1];
    var _h = react_hook_form_1.useForm({ mode: "all" }), register = _h.register, // позволяет регистрировать различные поля для форм
    _j = _h.formState, errors = _j.errors, isValid = _j.isValid, // объект с ошибками и т.д...
    handleSubmit = _h.handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset = _h.reset, // для очистки полей после отправки формы
    watch = _h.watch; // all / onBlur / onChange / onSubmit / onTouched
    var companyData = {};
    var onSubmit = function (companyData) {
        //  companyData - это набор данных из нашей формы
        console.log(companyData);
        localStorage.setItem("companyData-renaissance-pension", JSON.stringify(companyData));
        reset();
        setDormancyUserName(true);
        setDormancyPhone(true);
        setDormancyEmail(true);
        setDormancyCompanyName(true);
    };
    //   console.log(watch("userName")); // следит за изменением значения
    // Восстановить из localStorage
    if (localStorage.getItem("companyData-renaissance-pension")) {
        companyData = JSON.parse(localStorage.getItem("companyData-renaissance-pension") || "");
        // Для typescript вы можете использовать ||оператор и добавить к нему строку, чтобы она больше
        // не была нулевой. JSON.parse(localStorage.getItem("companyData-renaissance-pension") || "")
    }
    //   console.log(companyData);
    return (react_1["default"].createElement("section", { className: BusinnesForm_module_scss_1["default"]["businnes-form"] },
        react_1["default"].createElement("div", { className: BusinnesForm_module_scss_1["default"]["businnes-form__container"] },
            react_1["default"].createElement("h2", { className: BusinnesForm_module_scss_1["default"]["businnes-form__heading"] }, "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438"),
            react_1["default"].createElement("h1", { className: BusinnesForm_module_scss_1["default"]["businnes-form__subheading"] }, "\u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043F\u043E \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u043C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u043C \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u0434\u043B\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
            react_1["default"].createElement("form", { className: BusinnesForm_module_scss_1["default"]["businnes-form__form"], onSubmit: handleSubmit(onSubmit) },
                react_1["default"].createElement("div", { className: BusinnesForm_module_scss_1["default"]["form"] },
                    react_1["default"].createElement("div", { className: BusinnesForm_module_scss_1["default"]["form__label-container"] },
                        react_1["default"].createElement("label", { className: BusinnesForm_module_scss_1["default"]["my-input__label"] },
                            react_1["default"].createElement(InputTitle_1["default"], { title: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442?", isDormancy: isDormancyUserName }),
                            react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.userName) ? BusinnesForm_module_scss_1["default"]["my-input__field_invalid"] : BusinnesForm_module_scss_1["default"]["my-input__field"], type: "text" }, register("userName", {
                                required: "Это поле обязательно к заполнению",
                                onChange: function (event) {
                                    setDormancyUserName(false);
                                },
                                onBlur: function () {
                                    if (watch("userName").length === 0) {
                                        setDormancyUserName(true);
                                    }
                                },
                                minLength: {
                                    value: 3,
                                    message: "Минимум 3 символов"
                                }
                            }))),
                            (errors === null || errors === void 0 ? void 0 : errors.userName) && (react_1["default"].createElement("span", { className: BusinnesForm_module_scss_1["default"]["my-input__error"] }, ((_a = errors === null || errors === void 0 ? void 0 : errors.userName) === null || _a === void 0 ? void 0 : _a.message) || "Error!")))),
                    react_1["default"].createElement("div", { className: BusinnesForm_module_scss_1["default"]["form__label-container"] },
                        react_1["default"].createElement("label", { className: BusinnesForm_module_scss_1["default"]["my-input__label"] },
                            react_1["default"].createElement(InputTitle_1["default"], { title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", isDormancy: isDormancyPhone }),
                            react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.phone) ? BusinnesForm_module_scss_1["default"]["my-input__field_invalid"] : BusinnesForm_module_scss_1["default"]["my-input__field"], type: "tel" }, register("phone", {
                                required: "Это поле обязательно к заполнению",
                                onChange: function (event) {
                                    setDormancyPhone(false);
                                },
                                onBlur: function () {
                                    if (watch("phone").length === 0) {
                                        setDormancyPhone(true);
                                    }
                                },
                                minLength: {
                                    value: 11,
                                    message: "Минимум 11 символов"
                                },
                                maxLength: {
                                    value: 16,
                                    message: "Максимум 16 символов"
                                }
                            }))),
                            (errors === null || errors === void 0 ? void 0 : errors.phone) && (react_1["default"].createElement("span", { className: BusinnesForm_module_scss_1["default"]["my-input__error"] },
                                ((_b = errors === null || errors === void 0 ? void 0 : errors.phone) === null || _b === void 0 ? void 0 : _b.message) || "Error!",
                                " ")))),
                    react_1["default"].createElement("div", { className: BusinnesForm_module_scss_1["default"]["form__label-container"] },
                        react_1["default"].createElement("label", { className: BusinnesForm_module_scss_1["default"]["my-input__label"] },
                            react_1["default"].createElement(InputTitle_1["default"], { title: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", isDormancy: isDormancyEmail }),
                            react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.email) ? BusinnesForm_module_scss_1["default"]["my-input__field_invalid"] : BusinnesForm_module_scss_1["default"]["my-input__field"], type: "email" }, register("email", {
                                required: "Это поле обязательно к заполнению",
                                onChange: function (event) {
                                    setDormancyEmail(false);
                                },
                                onBlur: function () {
                                    if (watch("email").length === 0) {
                                        setDormancyEmail(true);
                                    }
                                },
                                minLength: {
                                    value: 5,
                                    message: "Минимум 5 символов"
                                }
                            }))),
                            (errors === null || errors === void 0 ? void 0 : errors.email) && (react_1["default"].createElement("span", { className: BusinnesForm_module_scss_1["default"]["my-input__error"] },
                                ((_c = errors === null || errors === void 0 ? void 0 : errors.email) === null || _c === void 0 ? void 0 : _c.message) || "Error!",
                                " ")))),
                    react_1["default"].createElement("div", { className: BusinnesForm_module_scss_1["default"]["form__label-container"] },
                        react_1["default"].createElement("label", { className: BusinnesForm_module_scss_1["default"]["my-input__label"] },
                            react_1["default"].createElement(InputTitle_1["default"], { title: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", isDormancy: isDormancyCompanyName }),
                            react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.companyName) ? BusinnesForm_module_scss_1["default"]["my-input__field_invalid"] : BusinnesForm_module_scss_1["default"]["my-input__field"], type: "text" }, register("companyName", {
                                required: "Это поле обязательно к заполнению",
                                onChange: function (event) {
                                    setDormancyCompanyName(false);
                                },
                                onBlur: function () {
                                    if (watch("companyName").length === 0) {
                                        setDormancyCompanyName(true);
                                    }
                                },
                                minLength: {
                                    value: 5,
                                    message: "Минимум 5 символов"
                                }
                            }))),
                            (errors === null || errors === void 0 ? void 0 : errors.companyName) && (react_1["default"].createElement("span", { className: BusinnesForm_module_scss_1["default"]["my-input__error"] },
                                (errors === null || errors === void 0 ? void 0 : errors.companyName.message) || "Error!",
                                " "))))),
                react_1["default"].createElement("div", { className: BusinnesForm_module_scss_1["default"]["form__button-container"] },
                    react_1["default"].createElement(InputSubmit_1["default"], { children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443", disabled: !isValid }))))));
};
exports["default"] = BusinnesForm;
