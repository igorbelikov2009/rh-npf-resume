"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../../general/DarkIcon/DarkIcon");
var ArchiveAssetValueRules_1 = require("../ArchiveAssetValueRules/ArchiveAssetValueRules");
var ArchivePension_1 = require("../ArchivePension/ArchivePension");
var ArchiveReporting_1 = require("../ArchiveReporting/ArchiveReporting");
var ArchiveShareholders_1 = require("../ArchiveShareholders/ArchiveShareholders");
var HidingArchive_module_scss_1 = require("./HidingArchive.module.scss");
var HidingArchive = function (_a) {
    var isVisible = _a.isVisible, isArchiveAssetValueRulesVisible = _a.isArchiveAssetValueRulesVisible, isArchivePensionVisible = _a.isArchivePensionVisible, isArchiveReportingVisible = _a.isArchiveReportingVisible, isArchiveShareholdersVisible = _a.isArchiveShareholdersVisible, onClickHidingArchive = _a.onClickHidingArchive;
    return (react_1["default"].createElement("section", { className: isVisible ? HidingArchive_module_scss_1["default"]["left-50"] : HidingArchive_module_scss_1["default"]["left-100"] },
        react_1["default"].createElement("div", { className: isVisible ? HidingArchive_module_scss_1["default"]["background_blur"] : HidingArchive_module_scss_1["default"]["background"] }),
        react_1["default"].createElement("div", { className: isVisible ? HidingArchive_module_scss_1["default"]["archives_left-50"] : HidingArchive_module_scss_1["default"]["archives_left-100"] },
            react_1["default"].createElement("div", { className: HidingArchive_module_scss_1["default"]["wrapper"] },
                react_1["default"].createElement("div", null,
                    isArchiveShareholdersVisible && react_1["default"].createElement(ArchiveShareholders_1["default"], null),
                    isArchivePensionVisible && react_1["default"].createElement(ArchivePension_1["default"], null),
                    isArchiveReportingVisible && react_1["default"].createElement(ArchiveReporting_1["default"], null),
                    isArchiveAssetValueRulesVisible && react_1["default"].createElement(ArchiveAssetValueRules_1["default"], null)),
                react_1["default"].createElement("div", { className: isVisible ? HidingArchive_module_scss_1["default"]["top-block_left-50"] : HidingArchive_module_scss_1["default"]["top-block_left-100"] },
                    react_1["default"].createElement("p", { className: HidingArchive_module_scss_1["default"]["heading"] }, "\u0410\u0440\u0445\u0438\u0432"),
                    react_1["default"].createElement("div", { className: HidingArchive_module_scss_1["default"]["image"], onClick: onClickHidingArchive },
                        react_1["default"].createElement(DarkIcon_1["default"], { icon: "Cross" })))))));
};
exports["default"] = HidingArchive;
