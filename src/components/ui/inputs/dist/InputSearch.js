"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Form_1 = require("react-bootstrap/Form");
var InputSearch = function (_a) {
    var searchQuery = _a.searchQuery, placeholder = _a.placeholder, setSearchQuery = _a.setSearchQuery;
    var handlerChange = function (e) {
        setSearchQuery(e.target.value);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Form_1["default"].Control, { value: searchQuery, onChange: handlerChange, placeholder: placeholder, "aria-label": "Default", "aria-describedby": "inputGroup-sizing-default" })));
};
exports["default"] = InputSearch;
