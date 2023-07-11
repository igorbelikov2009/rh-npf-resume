"use strict";
exports.__esModule = true;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var Logotypes_module_scss_1 = require("./Logotypes.module.scss");
var logoColored_svg_1 = require("../../../assets/logotype/logoColored.svg");
var logoWhite_svg_1 = require("../../../assets/logotype/logoWhite.svg");
var logoColoredSmall_svg_1 = require("../../../assets/logotype/logoColoredSmall.svg");
var logoWhiteSmall_svg_1 = require("../../../assets/logotype/logoWhiteSmall.svg");
var Logotypes = function (_a) {
    var isBackgroundWhite = _a.isBackgroundWhite;
    return (react_1["default"].createElement("a", { href: "#", className: Logotypes_module_scss_1["default"].logotype },
        react_1["default"].createElement("div", { className: Logotypes_module_scss_1["default"]["logotype__large"] },
            react_1["default"].createElement("img", { src: isBackgroundWhite ? logoColored_svg_1["default"] : logoWhite_svg_1["default"], alt: "logotype" })),
        react_1["default"].createElement("div", { className: Logotypes_module_scss_1["default"]["logotype__small"] },
            react_1["default"].createElement("img", { src: isBackgroundWhite ? logoColoredSmall_svg_1["default"] : logoWhiteSmall_svg_1["default"], alt: "logotype" }))));
};
exports["default"] = Logotypes;
