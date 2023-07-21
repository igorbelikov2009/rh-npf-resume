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
var SupportForm_module_scss_1 = require("./SupportForm.module.scss");
var SupportForm = function () {
    var _a, _b, _c, _d, _e;
    var _f = react_1.useState(true), isDormancyUserName = _f[0], setDormancyUserName = _f[1];
    var _g = react_1.useState(true), isDormancyPhone = _g[0], setDormancyPhone = _g[1];
    var _h = react_1.useState(true), isDormancyEmail = _h[0], setDormancyEmail = _h[1];
    var _j = react_1.useState(true), isDormancyPassword = _j[0], setDormancyPassword = _j[1];
    var _k = react_1.useState(true), isDormancyMessage = _k[0], setDormancyMessage = _k[1];
    var _l = react_hook_form_1.useForm({ mode: "all" }), register = _l.register, // позволяет регистрировать различные поля для форм
    _m = _l.formState, errors = _m.errors, isValid = _m.isValid, // объект с ошибками и т.д...
    handleSubmit = _l.handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset = _l.reset, // для очистки полей после отправки формы
    watch = _l.watch; // all / onBlur / onChange / onSubmit / onTouched
    var formData = {};
    // наш кастомный обработчик отправки формы
    var onSubmit = function (formData) {
        // formData - это набор данных из нашей формы
        // console.log(formData);
        localStorage.setItem("formData-renaissance-pension", JSON.stringify(formData));
        reset();
        setDormancyUserName(true);
        setDormancyPhone(true);
        setDormancyEmail(true);
        setDormancyPassword(true);
        setDormancyMessage(true);
    };
    // console.log(watch("firstName")); // следит за изменением значения
    // Восстановить из localStorage
    if (localStorage.getItem("formData-renaissance-pension")) {
        formData = JSON.parse(localStorage.getItem("formData-renaissance-pension") || "");
        // Для typescript вы можете использовать ||оператор и добавить к нему строку, чтобы она больше
        // не была нулевой. JSON.parse(localStorage.getItem("formData-renaissance-pension") || "")
    }
    //   console.log(formData)
    return (react_1["default"].createElement("section", { className: SupportForm_module_scss_1["default"]["support-form"] },
        react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__container"] },
            react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__content"] },
                react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__customer-service"] },
                    react_1["default"].createElement("h1", { className: SupportForm_module_scss_1["default"]["support-form__header"] },
                        "\u041A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0430\u044F ",
                        react_1["default"].createElement("span", { className: SupportForm_module_scss_1["default"]["support-form__span"] }, "\u0441\u043B\u0443\u0436\u0431\u0430")),
                    react_1["default"].createElement("a", { className: SupportForm_module_scss_1["default"]["support-form__phone-support"], href: "tel:+78002004766" }, "8 800 200-47-66"),
                    react_1["default"].createElement("p", { className: SupportForm_module_scss_1["default"]["support-form__phone-title"] }, "\u0437\u0432\u043E\u043D\u043E\u043A \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439"))),
            react_1["default"].createElement("form", { className: SupportForm_module_scss_1["default"]["support-form__form"], onSubmit: handleSubmit(onSubmit) },
                react_1["default"].createElement("label", { className: SupportForm_module_scss_1["default"]["my-input__label"] },
                    react_1["default"].createElement(InputTitle_1["default"], { title: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442?", isDormancy: isDormancyUserName }),
                    react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.userName) ? SupportForm_module_scss_1["default"]["my-input__field_invalid"] : SupportForm_module_scss_1["default"]["my-input__field"], type: "text" }, register("userName", {
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
                    (errors === null || errors === void 0 ? void 0 : errors.userName) && (react_1["default"].createElement("span", { className: SupportForm_module_scss_1["default"]["my-input__error"] }, ((_a = errors === null || errors === void 0 ? void 0 : errors.userName) === null || _a === void 0 ? void 0 : _a.message) || "Error!"))),
                react_1["default"].createElement("label", { className: SupportForm_module_scss_1["default"]["my-input__label"] },
                    react_1["default"].createElement(InputTitle_1["default"], { title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", isDormancy: isDormancyPhone }),
                    react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.phone) ? SupportForm_module_scss_1["default"]["my-input__field_invalid"] : SupportForm_module_scss_1["default"]["my-input__field"], type: "tel" }, register("phone", {
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
                    (errors === null || errors === void 0 ? void 0 : errors.phone) && react_1["default"].createElement("span", { className: SupportForm_module_scss_1["default"]["my-input__error"] },
                        ((_b = errors === null || errors === void 0 ? void 0 : errors.phone) === null || _b === void 0 ? void 0 : _b.message) || "Error!",
                        " ")),
                react_1["default"].createElement("label", { className: SupportForm_module_scss_1["default"]["my-input__label"] },
                    react_1["default"].createElement(InputTitle_1["default"], { title: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", isDormancy: isDormancyEmail }),
                    react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.email) ? SupportForm_module_scss_1["default"]["my-input__field_invalid"] : SupportForm_module_scss_1["default"]["my-input__field"], type: "email" }, register("email", {
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
                    (errors === null || errors === void 0 ? void 0 : errors.email) && react_1["default"].createElement("span", { className: SupportForm_module_scss_1["default"]["my-input__error"] },
                        ((_c = errors === null || errors === void 0 ? void 0 : errors.email) === null || _c === void 0 ? void 0 : _c.message) || "Error!",
                        " ")),
                react_1["default"].createElement("label", { className: SupportForm_module_scss_1["default"]["my-input__label"] },
                    react_1["default"].createElement(InputTitle_1["default"], { title: "\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C", isDormancy: isDormancyPassword }),
                    react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.password) ? SupportForm_module_scss_1["default"]["my-input__field_invalid"] : SupportForm_module_scss_1["default"]["my-input__field"], type: "text" }, register("password", {
                        required: "Это поле обязательно к заполнению",
                        onChange: function (event) {
                            setDormancyPassword(false);
                        },
                        onBlur: function () {
                            if (watch("password").length === 0) {
                                setDormancyPassword(true);
                            }
                        },
                        minLength: {
                            value: 5,
                            message: "Минимум 5 символов"
                        }
                    }))),
                    (errors === null || errors === void 0 ? void 0 : errors.password) && (react_1["default"].createElement("span", { className: SupportForm_module_scss_1["default"]["my-input__error"] },
                        ((_d = errors === null || errors === void 0 ? void 0 : errors.password) === null || _d === void 0 ? void 0 : _d.message) || "Error!",
                        " "))),
                react_1["default"].createElement("label", { className: SupportForm_module_scss_1["default"]["my-input__label"] },
                    react_1["default"].createElement(InputTitle_1["default"], { title: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435", isDormancy: isDormancyMessage }),
                    react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.message) ? SupportForm_module_scss_1["default"]["my-input__field_invalid"] : SupportForm_module_scss_1["default"]["my-input__field"], type: "text" }, register("message", {
                        required: "Это поле обязательно к заполнению",
                        onChange: function (event) {
                            setDormancyMessage(false);
                        },
                        onBlur: function () {
                            if (watch("message").length === 0) {
                                setDormancyMessage(true);
                            }
                        },
                        minLength: {
                            value: 15,
                            message: "Минимум 15 символов"
                        }
                    }))),
                    (errors === null || errors === void 0 ? void 0 : errors.message) && (react_1["default"].createElement("span", { className: SupportForm_module_scss_1["default"]["my-input__error"] },
                        ((_e = errors === null || errors === void 0 ? void 0 : errors.message) === null || _e === void 0 ? void 0 : _e.message) || "Error!",
                        " "))),
                react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__button-container"] },
                    react_1["default"].createElement(InputSubmit_1["default"], { children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443", disabled: !isValid }))))));
};
exports["default"] = SupportForm;
