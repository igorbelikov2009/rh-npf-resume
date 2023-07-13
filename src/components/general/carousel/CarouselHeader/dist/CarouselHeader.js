"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Arrows_1 = require("../Arrow/Arrows");
var CarouselHeader_module_scss_1 = require("./CarouselHeader.module.scss");
var CarouselHeader = function (_a) {
    var headerTitle = _a.headerTitle, headerSubtitle = _a.headerSubtitle, isBlurredLeft = _a.isBlurredLeft, isBlurredRight = _a.isBlurredRight, isHoveredLeft = _a.isHoveredLeft, isHoveredRight = _a.isHoveredRight, onClickLeft = _a.onClickLeft, onClickRight = _a.onClickRight;
    return (react_1["default"].createElement("section", { className: CarouselHeader_module_scss_1["default"]["carousel-header"] },
        react_1["default"].createElement("div", { className: CarouselHeader_module_scss_1["default"]["carousel-header__headings"] },
            headerTitle && react_1["default"].createElement("h1", { className: CarouselHeader_module_scss_1["default"]["carousel-header__title"] }, headerTitle),
            headerSubtitle && react_1["default"].createElement("p", { className: CarouselHeader_module_scss_1["default"]["carousel-header__subtitle"] }, headerSubtitle),
            react_1["default"].createElement(Arrows_1["default"], { isBlurredLeft: isBlurredLeft, isBlurredRight: isBlurredRight, isHoveredLeft: isHoveredLeft, isHoveredRight: isHoveredRight, onClickLeft: onClickLeft, onClickRight: onClickRight }))));
};
exports["default"] = CarouselHeader;
