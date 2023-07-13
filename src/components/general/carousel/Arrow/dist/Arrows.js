"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Arrows_module_scss_1 = require("./Arrows.module.scss");
var Arrows = function (_a) {
    var isHoveredLeft = _a.isHoveredLeft, isBlurredLeft = _a.isBlurredLeft, isHoveredRight = _a.isHoveredRight, isBlurredRight = _a.isBlurredRight, onClickLeft = _a.onClickLeft, onClickRight = _a.onClickRight;
    return (react_1["default"].createElement("div", { className: Arrows_module_scss_1["default"]["arrows"] },
        react_1["default"].createElement("div", { className: isHoveredLeft ? Arrows_module_scss_1["default"]["left-arrow__cursor-pointer"] : Arrows_module_scss_1["default"]["left-arrow__cursor-default"], onClick: onClickLeft },
            react_1["default"].createElement("img", { className: Arrows_module_scss_1["default"]["left-image"], src: "/icons/triple/Arrow Right/Colored.svg", alt: "arrow" }),
            react_1["default"].createElement("img", { className: isBlurredLeft ? Arrows_module_scss_1["default"]["left-image_opacity-04"] : Arrows_module_scss_1["default"]["left-image_opacity-1"], src: "/icons/triple/Arrow Right/Dark.svg", alt: "arrow" })),
        react_1["default"].createElement("div", { className: isHoveredRight ? Arrows_module_scss_1["default"]["right-arrow__cursor-pointer"] : Arrows_module_scss_1["default"]["right-arrow__cursor-default"], onClick: onClickRight },
            react_1["default"].createElement("img", { className: Arrows_module_scss_1["default"]["right-image"], src: "/icons/triple/Arrow Right/Colored.svg", alt: "arrow" }),
            react_1["default"].createElement("img", { className: isBlurredRight ? Arrows_module_scss_1["default"]["right-image_opacity-04"] : Arrows_module_scss_1["default"]["right-image_opacity-1"], src: "/icons/triple/Arrow Right/Dark.svg", alt: "arrow" }))));
};
exports["default"] = Arrows;
