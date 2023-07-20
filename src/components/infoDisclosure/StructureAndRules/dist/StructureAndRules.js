"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ButtonToArchive_1 = require("../../ui/buttons/ButtonToArchive/ButtonToArchive");
var StructureAndRules_module_scss_1 = require("./StructureAndRules.module.scss");
var StructureAndRules = function (_a) {
    var onClickArchivePension = _a.onClickArchivePension, onClickArchiveShareholders = _a.onClickArchiveShareholders;
    return (react_1["default"].createElement("section", { className: StructureAndRules_module_scss_1["default"]["structure-and-rules"] },
        react_1["default"].createElement("div", { className: StructureAndRules_module_scss_1["default"]["container"] },
            react_1["default"].createElement("div", { className: StructureAndRules_module_scss_1["default"]["column"] },
                react_1["default"].createElement("h1", { className: StructureAndRules_module_scss_1["default"]["heading"] }, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0438 \u0441\u043E\u0441\u0442\u0430\u0432 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u0432"),
                react_1["default"].createElement("a", { target: "_blank", className: StructureAndRules_module_scss_1["default"]["link"], href: "/pdf/infoOpening/\u0421\u043F\u0438\u0441\u043E\u043A \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u0432 \u0444\u043E\u043D\u0434\u0430.pdf" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043E\u0432 \u0424\u043E\u043D\u0434\u0430 \u0438 \u043B\u0438\u0446, \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043C \u043B\u0438\u0431\u043E \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0432\u043B\u0438\u044F\u043D\u0438\u0435\u043C \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0424\u043E\u043D\u0434 (\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0432 \u0411\u0430\u043D\u043A \u0420\u043E\u0441\u0441\u0438\u0438 04.08.2021 \u0433. \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043D\u0430 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435 \u0411\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438)"),
                react_1["default"].createElement("div", { className: StructureAndRules_module_scss_1["default"]["container-button"], onClick: onClickArchiveShareholders },
                    react_1["default"].createElement(ButtonToArchive_1["default"], null))),
            react_1["default"].createElement("div", { className: StructureAndRules_module_scss_1["default"]["column"] },
                react_1["default"].createElement("h1", { className: StructureAndRules_module_scss_1["default"]["heading"] }, "\u041F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430"),
                react_1["default"].createElement("a", { target: "_blank", className: StructureAndRules_module_scss_1["default"]["link"], href: "/pdf/infoOpening/\u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430.pdf" }, "\u041F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 (PDF)"),
                react_1["default"].createElement("div", { className: StructureAndRules_module_scss_1["default"]["container-button"], onClick: onClickArchivePension },
                    react_1["default"].createElement(ButtonToArchive_1["default"], null))))));
};
exports["default"] = StructureAndRules;
