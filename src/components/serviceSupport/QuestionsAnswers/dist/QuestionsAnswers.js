"use strict";
exports.__esModule = true;
var react_1 = require("react");
var serviceSupportData_1 = require("../../../data/serviceSupportData");
var ExpandingAnswer_1 = require("../../general/expanding/ExpandingAnswer/ExpandingAnswer");
var QuestionAnswerTable_1 = require("../QuestionAnswerTable/QuestionAnswerTable");
var QuestionsAnswers_module_scss_1 = require("./QuestionsAnswers.module.scss");
var QuestionsAnswers = function () {
    return (react_1["default"].createElement("section", { className: QuestionsAnswers_module_scss_1["default"]["questions-answers"] },
        react_1["default"].createElement("h1", { className: QuestionsAnswers_module_scss_1["default"]["questions-answers__heading"] }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B"),
        serviceSupportData_1.questionsAboutPension.map(function (obj, index) { return (react_1["default"].createElement(ExpandingAnswer_1["default"], { key: index, question: obj.question, answer: obj.answer, isParagraph: obj.isParagraph, isParagraphBefore: obj.isParagraphBefore })); }),
        react_1["default"].createElement(QuestionAnswerTable_1["default"], null)));
};
exports["default"] = QuestionsAnswers;
