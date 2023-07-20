"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ButtonToArchive_1 = require("../../ui/buttons/ButtonToArchive/ButtonToArchive");
var AssetValueRules_module_scss_1 = require("./AssetValueRules.module.scss");
var AssetValueRules = function (_a) {
    var onClickArchiveAssetValueRules = _a.onClickArchiveAssetValueRules;
    return (react_1["default"].createElement("section", { className: AssetValueRules_module_scss_1["default"]["asset-value-rules"] },
        react_1["default"].createElement("div", { className: AssetValueRules_module_scss_1["default"]["asset-value-rules__container"] },
            react_1["default"].createElement("div", { className: AssetValueRules_module_scss_1["default"]["asset-value-rules__wrapper"] },
                react_1["default"].createElement("h2", { className: AssetValueRules_module_scss_1["default"]["asset-value-rules__heading"] }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0447\u0438\u0441\u0442\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432"),
                react_1["default"].createElement("a", { className: AssetValueRules_module_scss_1["default"]["asset-value-rules__link"], target: "_blank", href: "/pdf/infoOpening/asset-value-rules/\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0447\u0438\u0441\u0442\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432  \u041D\u041F\u0424 \u0420\u041F-1577256574330.pdf" }, "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0447\u0438\u0441\u0442\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0410\u041E \u041D\u041F\u0424 \u00AB\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441 \u043F\u0435\u043D\u0441\u0438\u0438\u00BB (\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E: 23.12.2019)"),
                react_1["default"].createElement("div", { className: AssetValueRules_module_scss_1["default"]["asset-value-rules__container-button"], onClick: onClickArchiveAssetValueRules },
                    react_1["default"].createElement(ButtonToArchive_1["default"], null))))));
};
exports["default"] = AssetValueRules;
