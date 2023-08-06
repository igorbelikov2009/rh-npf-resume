"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion"); // анимация
var react_1 = require("react");
var ExpandingTable_1 = require("../../../general/expanding/ExpandingTable/ExpandingTable");
var CompositionReservesItem = function (_a) {
    var isVisible = _a.isVisible, arrayOfExpanderTables = _a.arrayOfExpanderTables;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isVisible && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, style: { overflow: "hidden" } }, arrayOfExpanderTables.map(function (expander, index) { return (react_1["default"].createElement(ExpandingTable_1["default"], { key: index, oneExpandingTable: expander })); }))))));
};
exports["default"] = CompositionReservesItem;
