"use strict";
exports.__esModule = true;
var react_1 = require("react");
var optionsItemsReportingAPI_1 = require("../../../../store/services/optionsItemsReportingAPI");
var reportingsAPI_1 = require("../../../../store/services/reportingsAPI");
var ServerError_1 = require("../../../general/ServerError/ServerError");
var ServerIsLoading_1 = require("../../../general/ServerIsLoading/ServerIsLoading");
var ButtonToArchive_1 = require("../../../ui/buttons/ButtonToArchive/ButtonToArchive");
var AdaptiveRadio_1 = require("../../../ui/radios/AdaptiveRadio/AdaptiveRadio");
var SelectorAndOptionBlock_1 = require("../../../ui/select/SelectorAndOptionBlock/SelectorAndOptionBlock");
var Reports_1 = require("../Reports/Reports");
var Reporting_module_scss_1 = require("./Reporting.module.scss");
var Reporting = function (_a) {
    var onClickArchiveReporting = _a.onClickArchiveReporting;
    var _b = react_1.useState("2021"), currentValue = _b[0], setCurrentValue = _b[1];
    var _c = react_1.useState("0"), id = _c[0], setId = _c[1];
    var _d = react_1.useState(false), isSelectorOptionBlockVisible = _d[0], setSelectorOptionBlockVisible = _d[1];
    // Поучаем данные с сервера
    var _e = reportingsAPI_1.reportingsAPI.useGetReportingsQuery(), reportings = _e.data, isLoading = _e.isLoading, isError = _e.isError;
    // const { data: optionsItemsReporting } = optionsItemsReportingAPI.useGetOptionsItemsReportingQuery();
    var data = optionsItemsReportingAPI_1.optionsItemsReportingAPI.useGetOptionsItemsReportingQuery().data;
    var optionsItemsReporting = [];
    if (data) {
        optionsItemsReporting = data;
    }
    var onChangeAdaptiveRadio = function (value, id) {
        setCurrentValue(value);
        setId(id);
    };
    var onChangeSelectorOptionBlock = function (value, id) {
        setCurrentValue(value);
        setId(id);
    };
    var onClickSelector = function () {
        setSelectorOptionBlockVisible(function (prev) { return !prev; });
    };
    var onClickSelectorOptionBlock = function () {
        setSelectorOptionBlockVisible(false);
    };
    return (react_1["default"].createElement("section", { className: Reporting_module_scss_1["default"]["reporting"] },
        react_1["default"].createElement("div", { className: Reporting_module_scss_1["default"]["reporting__container"] },
            react_1["default"].createElement("h1", { className: Reporting_module_scss_1["default"]["reporting__heading"] }, "\u041E\u0442\u0447\u0451\u0442\u043D\u043E\u0441\u0442\u044C"),
            react_1["default"].createElement("div", { className: Reporting_module_scss_1["default"]["reporting__flex-container"] },
                react_1["default"].createElement("div", { className: Reporting_module_scss_1["default"]["reporting__select"] },
                    react_1["default"].createElement(SelectorAndOptionBlock_1["default"], { currentValue: currentValue, optionsItems: optionsItemsReporting, isRadioListVisible: isSelectorOptionBlockVisible, onClickSelector: onClickSelector, emitOnChangeRadioListBlock: onChangeSelectorOptionBlock, emitOnClickRadioListBlock: onClickSelectorOptionBlock })),
                react_1["default"].createElement("div", { className: Reporting_module_scss_1["default"]["reporting__adaptive-radio"] },
                    react_1["default"].createElement(AdaptiveRadio_1["default"], { currentValue: currentValue, optionsItems: optionsItemsReporting, emitValue: onChangeAdaptiveRadio })),
                react_1["default"].createElement("div", { className: Reporting_module_scss_1["default"]["reporting__container-button"], onClick: onClickArchiveReporting },
                    react_1["default"].createElement(ButtonToArchive_1["default"], null))),
            react_1["default"].createElement("div", null,
                isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
                isError && react_1["default"].createElement(ServerError_1["default"], null),
                reportings &&
                    reportings.map(function (reports, index) { return (react_1["default"].createElement(Reports_1["default"], { key: index, reports: reports, isVisible: index === Number(id) })); })))));
};
exports["default"] = Reporting;
