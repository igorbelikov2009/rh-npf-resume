"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BusinnesImages_module_scss_1 = require("./BusinnesImages.module.scss");
var BusinnesImages = function () {
    return (react_1["default"].createElement("section", { className: BusinnesImages_module_scss_1["default"]["businnes-images"] },
        react_1["default"].createElement("div", { className: BusinnesImages_module_scss_1["default"]["businnes-images__container"] },
            react_1["default"].createElement("img", { src: "/images/businnes/table.jpg", alt: "table", className: BusinnesImages_module_scss_1["default"]["businnes-images__image"] }),
            react_1["default"].createElement("img", { src: "/images/businnes/workers.jpg", alt: "workers", className: BusinnesImages_module_scss_1["default"]["businnes-images__image"] }))));
};
exports["default"] = BusinnesImages;
