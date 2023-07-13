"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TopBlock_module_scss_1 = require("./TopBlock.module.scss");
var TopBlock = function (_a) {
    var heading = _a.heading, headingSpan = _a.headingSpan, subheading = _a.subheading, subheadingSpan = _a.subheadingSpan, image = _a.image;
    return (react_1["default"].createElement("section", { className: TopBlock_module_scss_1["default"]["top-block"], style: { backgroundImage: "url(" + image + ")" } },
        react_1["default"].createElement("div", { className: TopBlock_module_scss_1["default"]["top-block__container"] },
            react_1["default"].createElement("h1", { className: TopBlock_module_scss_1["default"]["top-block__heading"] },
                heading,
                react_1["default"].createElement("span", { className: TopBlock_module_scss_1["default"]["top-block__heading_span"] },
                    " ",
                    headingSpan,
                    " ")),
            react_1["default"].createElement("h2", { className: TopBlock_module_scss_1["default"]["top-block__subheading"] },
                subheading,
                react_1["default"].createElement("span", { className: TopBlock_module_scss_1["default"]["top-block__subheading_span"] }, subheadingSpan)))));
};
exports["default"] = TopBlock;
