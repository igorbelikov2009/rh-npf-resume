"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_module_scss_1 = require("./DarkIcon.module.scss");
var DarkIcon = function (_a) {
    var icon = _a.icon, isDecreased = _a.isDecreased;
    if (isDecreased) {
        return react_1["default"].createElement("img", { src: "/icons/triple/" + icon + "/Dark.svg", alt: "icon", className: DarkIcon_module_scss_1["default"]["dark-icon__decreased"] });
    }
    return react_1["default"].createElement("img", { src: "/icons/triple/" + icon + "/Dark.svg", alt: "icon", className: DarkIcon_module_scss_1["default"]["dark-icon"] });
};
exports["default"] = DarkIcon;
