"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SpecDepositoryItem_module_scss_1 = require("./SpecDepositoryItem.module.scss");
var SpecDepositoryItem = function (_a) {
    var subheading = _a.subheading, title = _a.title, subtitle = _a.subtitle;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", { className: SpecDepositoryItem_module_scss_1["default"]["spec-depository__paragraph"] },
            react_1["default"].createElement("span", { className: SpecDepositoryItem_module_scss_1["default"]["spec-depository__subheading"] },
                " ",
                subheading,
                " "),
            react_1["default"].createElement("span", { className: SpecDepositoryItem_module_scss_1["default"]["spec-depository__title"] },
                " ",
                title,
                " ")),
        react_1["default"].createElement("p", { className: SpecDepositoryItem_module_scss_1["default"]["spec-depository__paragraph"] },
            react_1["default"].createElement("span", { className: SpecDepositoryItem_module_scss_1["default"]["spec-depository__title"] },
                " ",
                subtitle,
                " "))));
};
exports["default"] = SpecDepositoryItem;
