"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UserDate_1 = require("../../../../api/UserDate/UserDate");
var infoDisclosureData_1 = require("../../../../data/infoDisclosureData");
var RadioCircle_1 = require("../../../ui/radios/RadioCircle/RadioCircle");
var NotificsContent_1 = require("../NotificsContent/NotificsContent");
var Notifics_module_scss_1 = require("./Notifics.module.scss");
var Notifics = function () {
    var _a = react_1.useState("0"), currentValue = _a[0], setCurrentValue = _a[1];
    var formattedContents = infoDisclosureData_1.contentsNotifics.map(function (item) { return ({
        date: String(UserDate_1["default"].format(new Date(item.date))),
        description: String(item.description)
    }); });
    var optionsItems = infoDisclosureData_1.contentsNotifics
        .map(function (item) { return new Date(item.date).getFullYear(); })
        .map(function (item, index) { return ({
        title: String(item),
        value: String(index)
    }); });
    var onChangeRadio = function (value) {
        setCurrentValue(value);
    };
    return (react_1["default"].createElement("section", { className: Notifics_module_scss_1["default"]["notifics"] },
        react_1["default"].createElement("div", { className: Notifics_module_scss_1["default"]["notifics__container"] },
            react_1["default"].createElement("h2", { className: Notifics_module_scss_1["default"]["notifics__heading"] }, "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"),
            react_1["default"].createElement("div", { className: Notifics_module_scss_1["default"]["notifics__triple-param-switch"] },
                react_1["default"].createElement(RadioCircle_1["default"], { currentValue: currentValue, optionsItems: optionsItems, emitValue: onChangeRadio })),
            react_1["default"].createElement("div", { className: Notifics_module_scss_1["default"]["notifics__content"] }, formattedContents.map(function (content, index) { return (react_1["default"].createElement(NotificsContent_1["default"], { key: index, content: content, isVisible: Number(currentValue) === index })); })))));
};
exports["default"] = Notifics;
