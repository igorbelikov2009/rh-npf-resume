"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ArchiveLink_1 = require("../../../ui/links/ArchiveLink/ArchiveLink");
var Report_module_scss_1 = require("./Report.module.scss");
var Report = function (_a) {
    var heading = _a.heading, archiveLinks = _a.archiveLinks;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: Report_module_scss_1["default"]["block-header"] },
            react_1["default"].createElement("p", { className: Report_module_scss_1["default"]["block-header__heading"] }, heading)),
        archiveLinks.map(function (link, index) { return (react_1["default"].createElement(ArchiveLink_1["default"], { key: index, href: link.href, title: link.title, subtitle: link.subtitle })); })));
};
exports["default"] = Report;
