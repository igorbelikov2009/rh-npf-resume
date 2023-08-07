"use strict";
exports.__esModule = true;
var react_1 = require("react");
var infoDisclosureData_1 = require("../../../../data/infoDisclosureData");
var fundIndicatorsAPI_1 = require("../../../../store/services/fundIndicatorsAPI");
var ServerError_1 = require("../../../general/ServerError/ServerError");
var ServerIsLoading_1 = require("../../../general/ServerIsLoading/ServerIsLoading");
var AdaptiveRadio_1 = require("../../../ui/radios/AdaptiveRadio/AdaptiveRadio");
var SelectorAndOptionBlock_1 = require("../../../ui/select/SelectorAndOptionBlock/SelectorAndOptionBlock");
var IndicatorsYear_1 = require("../IndicatorsYear/IndicatorsYear");
var FundPerformance_module_scss_1 = require("./FundPerformance.module.scss");
var FundPerformance = function () {
    var _a = react_1.useState("2021"), currentValue = _a[0], setCurrentValue = _a[1];
    var _b = react_1.useState("0"), idOptions = _b[0], setIdOptions = _b[1];
    var _c = react_1.useState(false), isVisible = _c[0], setRadioListVisible = _c[1];
    // Получаем данные с сервера
    var _d = fundIndicatorsAPI_1.fundIndicatorsAPI.useGetFundIndicatorsQuery(), fundIndicators = _d.data, isLoading = _d.isLoading, isError = _d.isError;
    var onChangeAdaptiveRadio = function (value, id) {
        setCurrentValue(value);
        setIdOptions(id);
    };
    var onClickSelector = function () {
        setRadioListVisible(function (prev) { return !prev; });
    };
    var onChangeRadio = function (value, id) {
        setCurrentValue(value);
        setIdOptions(id);
    };
    var onClickRadio = function () {
        setRadioListVisible(false);
    };
    return (react_1["default"].createElement("section", { className: FundPerformance_module_scss_1["default"]["fund-performance"] },
        react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__container"] },
            react_1["default"].createElement("h1", { className: FundPerformance_module_scss_1["default"]["fund-performance__heading"] }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438"),
            react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__flex-container"] },
                react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__selector"] },
                    react_1["default"].createElement(SelectorAndOptionBlock_1["default"], { currentValue: currentValue, optionsItems: infoDisclosureData_1.optionsItemsFundPerformance, isVisible: isVisible, onClickSelector: onClickSelector, emitOnChangeRadio: onChangeRadio, emitOnClickRadio: onClickRadio })),
                react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__adaptive-radio"] },
                    react_1["default"].createElement(AdaptiveRadio_1["default"], { optionsItems: infoDisclosureData_1.optionsItemsFundPerformance, currentValue: currentValue, emitValue: onChangeAdaptiveRadio }))),
            isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
            isError && react_1["default"].createElement(ServerError_1["default"], null),
            react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__indicators"] }, fundIndicators &&
                fundIndicators.map(function (item, index) { return (react_1["default"].createElement(IndicatorsYear_1["default"], { key: index, heading: item.heading, subheading: item.subheading, archiveLinks: item.archiveLinks, indicatorRows: item.indicatorRows, isVisible: Number(idOptions) === index })); })))));
};
exports["default"] = FundPerformance;
