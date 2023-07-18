"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TripleIcon_1 = require("../../../general/TripleIcon/TripleIcon");
var ArchiveLink_module_scss_1 = require("./ArchiveLink.module.scss");
var ArchiveLink = function (_a) {
    var href = _a.href, title = _a.title, subtitle = _a.subtitle;
    var _b = react_1.useState(false), isHovered = _b[0], setHovered = _b[1];
    return (react_1["default"].createElement("a", { target: "_blank", className: ArchiveLink_module_scss_1["default"]["archive-link"], href: href, onMouseOver: function () { return setHovered(true); }, onMouseOut: function () { return setHovered(false); }, rel: "noreferrer" },
        react_1["default"].createElement("div", { className: ArchiveLink_module_scss_1["default"]["archive-link__icon"] },
            react_1["default"].createElement(TripleIcon_1["default"], { hovered: isHovered, light: false, icon: "Pdf" })),
        react_1["default"].createElement("div", { className: ArchiveLink_module_scss_1["default"]["archive-link__row"] },
            react_1["default"].createElement("p", { className: ArchiveLink_module_scss_1["default"]["archive-link__title"] }, title),
            react_1["default"].createElement("p", { className: ArchiveLink_module_scss_1["default"]["archive-link__subtitle"] }, subtitle))));
};
exports["default"] = ArchiveLink;
