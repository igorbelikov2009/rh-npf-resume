"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var Table_1 = require("../../Table/Table");
var ExpandingPanel_1 = require("../ExpandingPanel/ExpandingPanel");
var ExpandingTable_module_scss_1 = require("./ExpandingTable.module.scss");
var ExpandingTable = function (_a) {
    var oneExpandingTable = _a.oneExpandingTable;
    var _b = react_1.useState(false), isVisible = _b[0], setVisible = _b[1];
    var expanderHandler = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", { className: ExpandingTable_module_scss_1["default"]["expanding"] },
        react_1["default"].createElement(ExpandingPanel_1["default"], { isContentVisible: isVisible, panelName: oneExpandingTable.tableName, onClickExpanding: expanderHandler }),
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Table_1["default"], { headings: oneExpandingTable.headings, arrayRows: oneExpandingTable.arrayRows })))))));
};
exports["default"] = ExpandingTable;
