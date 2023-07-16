"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ContactsMap_module_scss_1 = require("./ContactsMap.module.scss");
var ContactsMap = function () {
    var uniqueTitle = "This is a unique title";
    return (react_1["default"].createElement("section", { className: ContactsMap_module_scss_1["default"]["contacts-map"] },
        react_1["default"].createElement("h1", { className: ContactsMap_module_scss_1["default"]["contacts-map__header"] }, " ContactsMap "),
        react_1["default"].createElement("h1", { className: ContactsMap_module_scss_1["default"]["contacts-map__header"] }, " Google \u043D\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442 "),
        react_1["default"].createElement("iframe", { title: uniqueTitle })));
};
exports["default"] = ContactsMap;
