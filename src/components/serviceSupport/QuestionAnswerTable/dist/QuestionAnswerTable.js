"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var serviceSupportData_1 = require("../../../data/serviceSupportData");
var ExpandingPanel_1 = require("../../general/expanding/ExpandingPanel/ExpandingPanel");
var TableQ_1 = require("../TableQ/TableQ");
var QuestionAnswerTable_module_scss_1 = require("./QuestionAnswerTable.module.scss");
var QuestionAnswerTable = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setVisible = _a[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: "expanding" },
        react_1["default"].createElement(ExpandingPanel_1["default"], { isContentVisible: isVisible, panelName: "\u041A\u0430\u043A\u0438\u0435 \u043D\u0430\u043B\u043E\u0433\u0438 \u0443\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0443\u0447\u0430\u0441\u0442\u0438\u0435\u043C \u0432 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435?", onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", { className: QuestionAnswerTable_module_scss_1["default"]["expanding__content"] },
                react_1["default"].createElement("p", { className: QuestionAnswerTable_module_scss_1["default"]["paragraph"] }, "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043D\u0430\u043B\u043E\u0433\u043E\u043E\u0431\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u0440\u0438 \u0432\u044B\u043F\u043B\u0430\u0442\u0435 \u043F\u0435\u043D\u0441\u0438\u0439 \u0438 \u0432\u044B\u043A\u0443\u043F\u043D\u044B\u0445 \u0441\u0443\u043C\u043C:"),
                react_1["default"].createElement(TableQ_1["default"], { arrayRows: serviceSupportData_1.companyContributions.arrayRows, headings: serviceSupportData_1.companyContributions.headings }),
                react_1["default"].createElement("p", { className: QuestionAnswerTable_module_scss_1["default"]["paragraph"] },
                    react_1["default"].createElement("br", null)),
                react_1["default"].createElement(TableQ_1["default"], { arrayRows: serviceSupportData_1.participantContributions.arrayRows, headings: serviceSupportData_1.participantContributions.headings }),
                react_1["default"].createElement("p", { className: QuestionAnswerTable_module_scss_1["default"]["paragraph"] }, "* \u041D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0444\u0430\u043A\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F / \u043D\u0435\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0433\u043E \u0432\u044B\u0447\u0435\u0442\u0430"),
                react_1["default"].createElement("p", { className: QuestionAnswerTable_module_scss_1["default"]["paragraph"] }, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0435 \u043B\u044C\u0433\u043E\u0442\u044B - \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0432\u044B\u0447\u0435\u0442 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 13% \u043E\u0442 \u0441\u0443\u043C\u043C\u044B \u0443\u043F\u043B\u0430\u0447\u0435\u043D\u043D\u044B\u0445 \u0432\u0437\u043D\u043E\u0441\u043E\u0432 \u043F\u043E \u043B\u0438\u0447\u043D\u043E\u043C\u0443 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F (\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0441\u0443\u043C\u043C\u044B \u0432\u0437\u043D\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0433\u043E \u0432\u044B\u0447\u0435\u0442\u0430 \u2013 120 000 \u0440\u0443\u0431\u043B\u0435\u0439/\u0433\u043E\u0434).")))))));
};
exports["default"] = QuestionAnswerTable;
