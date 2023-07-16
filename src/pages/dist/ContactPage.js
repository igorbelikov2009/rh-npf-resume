"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Address_1 = require("../components/contacts/Address/Address");
var ContactsMap_1 = require("../components/contacts/ContactsMap/ContactsMap");
var ContactPage = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Address_1["default"], null),
        react_1["default"].createElement(ContactsMap_1["default"], null)));
};
exports["default"] = ContactPage;
