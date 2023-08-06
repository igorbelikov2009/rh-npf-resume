"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../DarkIcon/DarkIcon");
var ExpandingPanel_module_scss_1 = require("./ExpandingPanel.module.scss");
var ExpandingPanel = function (_a) {
    var isContentVisible = _a.isContentVisible, panelName = _a.panelName, onClickExpanding = _a.onClickExpanding;
    return (react_1["default"].createElement("div", { className: ExpandingPanel_module_scss_1["default"]["expanding__row"], onClick: onClickExpanding },
        react_1["default"].createElement("h2", { className: ExpandingPanel_module_scss_1["default"]["expanding__title"] }, panelName),
        react_1["default"].createElement("div", { className: ExpandingPanel_module_scss_1["default"]["expanding__icon-container"] },
            react_1["default"].createElement("div", { className: isContentVisible ? ExpandingPanel_module_scss_1["default"]["expanding__plus-rotate"] : ExpandingPanel_module_scss_1["default"]["expanding__plus"] },
                react_1["default"].createElement(DarkIcon_1["default"], { isDecreased: true, icon: "Plus Thin" })),
            react_1["default"].createElement("div", { className: isContentVisible ? ExpandingPanel_module_scss_1["default"]["expanding__minus-rotate"] : ExpandingPanel_module_scss_1["default"]["expanding__minus"] },
                react_1["default"].createElement(DarkIcon_1["default"], { isDecreased: true, icon: "Minus Thin" })))));
};
exports["default"] = ExpandingPanel;
