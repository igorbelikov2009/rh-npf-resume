"use strict";
exports.__esModule = true;
var react_1 = require("react");
var serviceSupportData_1 = require("../../../data/serviceSupportData");
var ExpandingAnswer_1 = require("../../general/expanding/ExpandingAnswer/ExpandingAnswer");
var PensionPrograms_module_scss_1 = require("./PensionPrograms.module.scss");
var PensionPrograms = function () {
    return (react_1["default"].createElement("section", { className: PensionPrograms_module_scss_1["default"]["pension-programs"] },
        react_1["default"].createElement("h1", { className: PensionPrograms_module_scss_1["default"]["pension-programs__heading"] }, "\u041F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"),
        serviceSupportData_1.pensionPrograms.map(function (obj) { return (react_1["default"].createElement(ExpandingAnswer_1["default"], { key: obj.question, question: obj.question, answer: obj.answer, isParagraph: obj.isParagraph, isParagraphBefore: obj.isParagraphBefore })); })));
};
exports["default"] = PensionPrograms;
