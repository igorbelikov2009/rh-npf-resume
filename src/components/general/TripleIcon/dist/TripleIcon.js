"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TripleIcon_module_scss_1 = require("./TripleIcon.module.scss");
var TripleIcon = function (_a) {
    var icon = _a.icon, light = _a.light, hovered = _a.hovered;
    var _b = react_1.useState(false), isLocalHovered = _b[0], setIsLocalHovered = _b[1];
    var state = light ? "light" : "dark";
    if (isLocalHovered || hovered)
        state = "colored";
    return (react_1["default"].createElement("img", { onMouseOver: function () { return setIsLocalHovered(true); }, onMouseOut: function () { return setIsLocalHovered(false); }, src: "/icon/triple/" + icon + "/" + state + ".svg", alt: icon, className: TripleIcon_module_scss_1["default"]["triple-icon"] }));
};
exports["default"] = TripleIcon;
