"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Checkbox_1 = require("../../../ui/Checkbox/Checkbox");
var Graph_1 = require("../Graph/Graph");
var PensionInfo_1 = require("../PensionInfo/PensionInfo");
var GenderRadio_1 = require("../radios/GenderRadio");
var AgeSlider_1 = require("../sliders/AgeSlider");
var DownPaymentSlider_1 = require("../sliders/DownPaymentSlider");
var MonthlyInstallmenSlider_1 = require("../sliders/MonthlyInstallmenSlider");
var PeriodPaymentPensionSlider_1 = require("../sliders/PeriodPaymentPensionSlider");
var Calculator_module_scss_1 = require("./Calculator.module.scss");
var Calculator = function () {
    var _a = react_1.useState("60"), genderValue = _a[0], setGenderValue = _a[1]; // гендерный возраст выхода на пенсию
    var _b = react_1.useState("65"), ageMan = _b[0], setAgeMan = _b[1]; // возраст выхода на пенсию мужчины
    var _c = react_1.useState("60"), ageWoman = _c[0], setAgeWoman = _c[1]; // возраст выхода на пенсию женщины
    var _d = react_1.useState("30"), ageValue = _d[0], setAgeValue = _d[1]; // текущий возраст
    var _e = react_1.useState("65"), ageSliderMax = _e[0], setAgeSliderMax = _e[1]; // устанавливаем атрибуты для ageSlider
    var _f = react_1.useState(35), investmentTerm = _f[0], setInvestmentTerm = _f[1]; // срок инвестирования => investmentTerm
    var _g = react_1.useState("1000"), downPayment = _g[0], setDownPayment = _g[1]; // первичный взнос => downPayment
    var _h = react_1.useState("5000"), monthlyInstallment = _h[0], setMonthlyInstallment = _h[1]; // ежемесячный взнос => monthlyInstallment
    var _j = react_1.useState("15"), periodPaymentPension = _j[0], setPeriodPaymentPension = _j[1]; // срок выплат пенсии => periodPaymentPension
    var yearPersent = 0.05; // годовой процент накопления => annualPercentage
    var _k = react_1.useState(0), generalAccumValue = _k[0], setGeneralAccumValue = _k[1]; // общие накопления => generalSavings
    var _l = react_1.useState(0), pensionValue = _l[0], setPensionValue = _l[1]; // размер выплаты пенсии => pension
    var _m = react_1.useState(false), earlyRretirement = _m[0], setEarlyRretirement = _m[1]; // ускоренный выход на пенсию
    react_1.useEffect(function () {
        if (earlyRretirement) {
            setGenderValue("60");
            setAgeMan("60");
            setAgeWoman("55");
            setAgeSliderMax("60");
        }
        else {
            setGenderValue("60");
            setAgeMan("65");
            setAgeWoman("60");
            setAgeSliderMax("60");
        }
    }, [earlyRretirement]);
    var onChangeGenderRadio = function (emitGenderRadio) {
        setGenderValue(emitGenderRadio);
        setAgeSliderMax(emitGenderRadio);
    };
    // console.log("ageSliderMax :" + ageSliderMax);
    var toogleChecked = function () {
        setEarlyRretirement(function (prev) { return !prev; });
    };
    // console.log("ageMan :" + ageMan);
    // console.log("ageWoman :" + ageWoman);
    // console.log("genderValue :" + genderValue);
    // console.log(earlyRretirement);
    var ageSliderHandler = function (ageSliderValue) {
        setAgeValue(ageSliderValue);
    };
    var downPaymentSliderHandler = function (downPaymentValue) {
        setDownPayment(downPaymentValue);
    };
    var monthlyInstallmenSliderHandler = function (monthlyInstallmentValue) {
        setMonthlyInstallment(monthlyInstallmentValue);
    };
    var periodPaymentPensionSliderHandler = function (periodPaymentPension) {
        setPeriodPaymentPension(periodPaymentPension);
    };
    react_1.useEffect(function () {
        setInvestmentTerm(Number(genderValue) - Number(ageValue));
        // console.log("investmentTerm :" + investmentTerm);
        // console.log("downPayment :" + downPayment);
        // console.log("monthlyInstallment :" + monthlyInstallment);
        // console.log("periodPaymentPension :" + periodPaymentPension);
        // // обнуляем каждый раз накопления от первичного взноса
        var firstInvestAccumValue = 0;
        // // обнуляем каждый раз накопления ежемесячных взносов
        var monthInvestAccumValue = 0;
        // // вычисляем общий процент накопления за несколько лет
        var generalPercent = 1 + yearPersent;
        var percentInvestmentTerm = Math.pow(generalPercent, investmentTerm);
        // console.log("percent:", percentInvestmentTerm);
        // // вычисляем накопления от первичного взноса
        firstInvestAccumValue = Number(downPayment) * percentInvestmentTerm;
        firstInvestAccumValue = Math.round(firstInvestAccumValue);
        // console.log("firstInvestAccumValue:" + firstInvestAccumValue);
        // // вычисляем количество месяцев ежемесячных взносов
        var numberOfMonths = investmentTerm * 12;
        // console.log("numberOfMonths:" + numberOfMonths);
        // // вычисляем накопления ежемесячных взносов за нескольк лет (количество месяцев ежемесячных взносов)
        monthInvestAccumValue = 0; // обнуляем при каждом новом движении слайдера или свиттча
        monthInvestAccumValue = Math.round(Number(monthlyInstallment) * numberOfMonths +
            Number(monthlyInstallment) * (numberOfMonths - 1) * ((yearPersent * numberOfMonths) / 24));
        // console.log("monthInvestAccumValue:" + monthInvestAccumValue);
        // // вычисляем общие накопления
        setGeneralAccumValue(0);
        setGeneralAccumValue(Math.round(firstInvestAccumValue + monthInvestAccumValue));
        // console.log("generalAccumValue:" + generalAccumValue);
        // // вычисляем размер ежемесячной пенсии
        setPensionValue(Math.round(generalAccumValue / Number(periodPaymentPension) / 12));
        // console.log("pensionValue:", pensionValue);
        // console.log("finish");
    }, [
        genderValue,
        earlyRretirement,
        ageValue,
        investmentTerm,
        downPayment,
        monthlyInstallment,
        periodPaymentPension,
        generalAccumValue,
    ]);
    return (react_1["default"].createElement("section", { id: "calculator", className: Calculator_module_scss_1["default"]["calculator"] },
        react_1["default"].createElement("div", { className: Calculator_module_scss_1["default"]["calculator__container"] },
            react_1["default"].createElement("h2", { className: Calculator_module_scss_1["default"]["calculator__heading"] }, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"),
            react_1["default"].createElement("h1", { className: Calculator_module_scss_1["default"]["calculator__subheading"] }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0431\u0443\u0434\u0443\u0449\u0443\u044E \u043F\u0435\u043D\u0441\u0438\u044E"),
            react_1["default"].createElement("div", { className: Calculator_module_scss_1["default"]["calculator__block"] },
                react_1["default"].createElement("div", { className: Calculator_module_scss_1["default"]["calculator__box"] },
                    react_1["default"].createElement("div", { className: Calculator_module_scss_1["default"]["calculator__sliders"] },
                        react_1["default"].createElement("form", null,
                            react_1["default"].createElement("div", { className: Calculator_module_scss_1["default"]["slider-block__age"] },
                                react_1["default"].createElement("div", { className: Calculator_module_scss_1["default"]["slider-block__radio-container"] },
                                    react_1["default"].createElement(GenderRadio_1["default"], { ageMan: ageMan, ageWoman: ageWoman, genderValue: genderValue, onChangeGenderRadio: onChangeGenderRadio })),
                                react_1["default"].createElement(AgeSlider_1["default"], { ageSliderMax: ageSliderMax, ageSliderHandler: ageSliderHandler })),
                            react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement(DownPaymentSlider_1["default"], { downPaymentSliderHandler: downPaymentSliderHandler }),
                                react_1["default"].createElement(MonthlyInstallmenSlider_1["default"], { monthlyInstallmenSliderHandler: monthlyInstallmenSliderHandler }),
                                react_1["default"].createElement(PeriodPaymentPensionSlider_1["default"], { periodPaymentPensionSliderHandler: periodPaymentPensionSliderHandler })),
                            react_1["default"].createElement("div", { className: Calculator_module_scss_1["default"]["slider-block__checkbox"] },
                                react_1["default"].createElement(Checkbox_1["default"], { checkedValue: earlyRretirement, toogleChecked: toogleChecked })),
                            !earlyRretirement && (react_1["default"].createElement("p", { className: Calculator_module_scss_1["default"]["slider-block__checkbox-info"] }, "* \u0420\u0430\u0441\u0447\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430, \u0434\u0430\u044E\u0449\u0435\u0433\u043E \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u0435\u043D\u0441\u0438\u0438 \u043F\u043E \u0441\u0442\u0430\u0440\u043E\u0441\u0442\u0438, \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043E \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u043C \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C.")))),
                    react_1["default"].createElement(PensionInfo_1["default"], { generalAccumValue: generalAccumValue, pensionValue: pensionValue })),
                react_1["default"].createElement("div", { className: Calculator_module_scss_1["default"]["calculator__graph-container"] },
                    react_1["default"].createElement(Graph_1["default"], null))))));
};
exports["default"] = Calculator;
