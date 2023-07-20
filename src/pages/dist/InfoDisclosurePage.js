"use strict";
exports.__esModule = true;
var react_1 = require("react");
var infoTop_jpg_1 = require("../assets/images/info/infoTop.jpg");
var TopBlock_1 = require("../components/general/TopBlock/TopBlock");
var AssetValueRules_1 = require("../components/infoDisclosure/AssetValueRules/AssetValueRules");
var DocumentsOfTitle_1 = require("../components/infoDisclosure/DocumentsOfTitle/DocumentsOfTitle");
var FundPerformance_1 = require("../components/infoDisclosure/fundPerformance/FundPerformance/FundPerformance");
var GeneralInfo_1 = require("../components/infoDisclosure/GeneralInfo/GeneralInfo");
var HidingArchive_1 = require("../components/infoDisclosure/hidingArchive/HidingArchive/HidingArchive");
var IncomeChangeRegulation_1 = require("../components/infoDisclosure/IncomeChangeRegulation/IncomeChangeRegulation");
var ManagementCompanies_1 = require("../components/infoDisclosure/ManagementCompanies/ManagementCompanies");
var Notifics_1 = require("../components/infoDisclosure/notifics/Notifics/Notifics");
var Other_1 = require("../components/infoDisclosure/Other/Other");
var PortfolioStructure_1 = require("../components/infoDisclosure/PortfolioStructure/PortfolioStructure");
var Reporting_1 = require("../components/infoDisclosure/reporting/Reporting/Reporting");
var SpecDepository_1 = require("../components/infoDisclosure/specDepository/SpecDepository/SpecDepository");
var StructureAndRules_1 = require("../components/infoDisclosure/StructureAndRules/StructureAndRules");
var InfoDisclosurePage = function () {
    var _a = react_1.useState(false), isHidingArchiveVisible = _a[0], setHidingArchiveVisible = _a[1]; // false
    var _b = react_1.useState(false), isArchiveShareholdersVisible = _b[0], setArchiveShareholdersVisible = _b[1]; // false
    var _c = react_1.useState(false), isArchivePensionVisible = _c[0], setArchivePensionVisible = _c[1]; // false
    var _d = react_1.useState(false), isArchiveReportingVisible = _d[0], setArchiveReportingVisible = _d[1]; // false
    var _e = react_1.useState(false), isArchiveAssetValueRulesVisible = _e[0], setArchiveAssetValueRulesVisible = _e[1]; // false
    var onClickHidingArchive = function () {
        setHidingArchiveVisible(false);
        setArchiveShareholdersVisible(false);
        setArchivePensionVisible(false);
        setArchiveReportingVisible(false);
        setArchiveAssetValueRulesVisible(false);
        document.body.style.overflow = "";
    };
    var onClickArchiveShareholders = function () {
        setHidingArchiveVisible(function (prev) { return !prev; });
        setArchiveShareholdersVisible(function (prev) { return !prev; });
        document.body.style.overflow = "hidden";
    };
    var onClickArchivePension = function () {
        setHidingArchiveVisible(function (prev) { return !prev; });
        setArchivePensionVisible(function (prev) { return !prev; });
        document.body.style.overflow = "hidden";
    };
    var onClickArchiveAssetValueRules = function () {
        setHidingArchiveVisible(function (prev) { return !prev; });
        setArchiveAssetValueRulesVisible(function (prev) { return !prev; });
        document.body.style.overflow = "hidden";
    };
    var onClickArchiveReporting = function () {
        setHidingArchiveVisible(function (prev) { return !prev; });
        setArchiveReportingVisible(function (prev) { return !prev; });
        document.body.style.overflow = "hidden";
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u0420\u0430\u0441\u043A\u0440\u044B\u0442\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438", image: infoTop_jpg_1["default"] }),
        react_1["default"].createElement(GeneralInfo_1["default"], null),
        react_1["default"].createElement(FundPerformance_1["default"], null),
        react_1["default"].createElement(DocumentsOfTitle_1["default"], null),
        react_1["default"].createElement(StructureAndRules_1["default"], { onClickArchiveShareholders: onClickArchiveShareholders, onClickArchivePension: onClickArchivePension }),
        react_1["default"].createElement(Reporting_1["default"], { onClickArchiveReporting: onClickArchiveReporting }),
        react_1["default"].createElement(PortfolioStructure_1["default"], null),
        react_1["default"].createElement(IncomeChangeRegulation_1["default"], null),
        react_1["default"].createElement(AssetValueRules_1["default"], { onClickArchiveAssetValueRules: onClickArchiveAssetValueRules }),
        react_1["default"].createElement(HidingArchive_1["default"], { isVisible: isHidingArchiveVisible, isArchiveShareholdersVisible: isArchiveShareholdersVisible, isArchivePensionVisible: isArchivePensionVisible, isArchiveReportingVisible: isArchiveReportingVisible, isArchiveAssetValueRulesVisible: isArchiveAssetValueRulesVisible, onClickHidingArchive: onClickHidingArchive }),
        react_1["default"].createElement(Other_1["default"], null),
        react_1["default"].createElement(ManagementCompanies_1["default"], null),
        react_1["default"].createElement(SpecDepository_1["default"], null),
        react_1["default"].createElement(Notifics_1["default"], null)));
};
exports["default"] = InfoDisclosurePage;
