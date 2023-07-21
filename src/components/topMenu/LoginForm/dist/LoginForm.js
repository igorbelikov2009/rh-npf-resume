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
var Checkbox_1 = require("../../ui/Checkbox/Checkbox");
var InputSubmit_1 = require("../../ui/inputs/InputSubmit/InputSubmit");
var InputTitle_1 = require("../../ui/inputs/InputTitle/InputTitle");
var LoginForm_module_scss_1 = require("./LoginForm.module.scss");
var LoginForm = function (_a) {
    var _b;
    var isVisible = _a.isVisible, closeLoginForm = _a.closeLoginForm;
    var _c = react_1.useState(true), isDormancyPhone = _c[0], setDormancyPhone = _c[1];
    var _d = react_1.useState(false), isAgree = _d[0], setAgree = _d[1];
    var titleCheckbox = "Я прочитал(-а)";
    var spanCheckbox = " условия соглашения ";
    var subtitleCheckbox = "и, нажимая кнопку «Продолжить», принимаю их";
    var _e = react_hook_form_1.useForm({ mode: "all" }), register = _e.register, // позволяет регистрировать различные поля для форм
    _f = _e.formState, errors = _f.errors, isValid = _f.isValid, // объект с ошибками и т.д...
    handleSubmit = _e.handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset = _e.reset, // для очистки полей после отправки формы
    watch = _e.watch; // all / onBlur / onChange / onSubmit / onTouched
    // наш кастомный обработчик отправки формы
    var onSubmit = function (data) {
        //  data - это набор данных из нашей формы
        // console.log(data);
        reset();
        setDormancyPhone(true);
        setAgree(false);
        closeLoginForm();
    };
    // console.log(watch("firstName")); // следит за изменением значения
    var toogleChecked = function () {
        setAgree(!isAgree);
    };
    return (
    // Здесь через onSubmit мы передаём данные полей в обёртку handleSubmit()
    react_1["default"].createElement("form", { className: isVisible ? LoginForm_module_scss_1["default"]["login-form__opacity1"] : LoginForm_module_scss_1["default"]["login-form__opacity0"], onSubmit: handleSubmit(onSubmit) },
        react_1["default"].createElement("h1", { className: LoginForm_module_scss_1["default"]["login-form__heading"] }, "\u0412\u0445\u043E\u0434/\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"),
        react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__block-of-forms"] },
            react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__input-container"] },
                react_1["default"].createElement("label", { className: LoginForm_module_scss_1["default"]["my-input__label"] },
                    react_1["default"].createElement(InputTitle_1["default"], { title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", isDormancy: isDormancyPhone }),
                    react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.phone) ? LoginForm_module_scss_1["default"]["my-input__field_invalid"] : LoginForm_module_scss_1["default"]["my-input__field"], type: "tel" }, register("phone", {
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
                    (errors === null || errors === void 0 ? void 0 : errors.phone) && react_1["default"].createElement("span", { className: LoginForm_module_scss_1["default"]["my-input__error"] },
                        ((_b = errors === null || errors === void 0 ? void 0 : errors.phone) === null || _b === void 0 ? void 0 : _b.message) || "Error!",
                        " "))),
            react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__checkbox-container"] },
                react_1["default"].createElement(Checkbox_1["default"], { checkedValue: isAgree, toogleChecked: toogleChecked, title: titleCheckbox, span: spanCheckbox, subtitle: subtitleCheckbox })),
            react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__button-container"] },
                react_1["default"].createElement(InputSubmit_1["default"], { children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C", disabled: !isValid || !isAgree }))),
        react_1["default"].createElement("p", { className: LoginForm_module_scss_1["default"]["login-form__title"] },
            "\u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
            react_1["default"].createElement("span", { className: LoginForm_module_scss_1["default"]["login-form__span"] }, " \u041D\u041F\u0424 \"\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441 - \u043F\u0435\u043D\u0441\u0438\u0438\"")),
        react_1["default"].createElement("p", { className: LoginForm_module_scss_1["default"]["login-form__subtitle"] }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \u00AB\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C\u00BB, \u0432\u044B \u0432\u044B\u0440\u0430\u0436\u0430\u0435\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F")));
};
exports["default"] = LoginForm;
