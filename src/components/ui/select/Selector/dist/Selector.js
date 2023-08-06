"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Selector_module_scss_1 = require("./Selector.module.scss");
var Selector = function (_a) {
    var value = _a.value, isVisible = _a.isVisible, onClickSelector = _a.onClickSelector;
    return (react_1["default"].createElement("div", { className: Selector_module_scss_1["default"]["selector"] },
        react_1["default"].createElement("div", { className: Selector_module_scss_1["default"]["container-title"] },
            react_1["default"].createElement("div", { className: isVisible ? Selector_module_scss_1["default"]["border-gray"] : Selector_module_scss_1["default"]["border-white"] },
                react_1["default"].createElement("div", { className: isVisible ? Selector_module_scss_1["default"]["container-gray"] : Selector_module_scss_1["default"]["container-white"], onClick: onClickSelector },
                    react_1["default"].createElement("div", { className: Selector_module_scss_1["default"]["selector-date"] },
                        react_1["default"].createElement("p", { className: Selector_module_scss_1["default"]["selector-value"] }, value)),
                    react_1["default"].createElement("div", { className: Selector_module_scss_1["default"]["icon-container"] },
                        react_1["default"].createElement("img", { className: isVisible ? Selector_module_scss_1["default"]["icon-rotate-180"] : Selector_module_scss_1["default"]["icon-rotate-0"], src: "/icons/triple/Arrow Down/Dark.svg", alt: "Arrow" }))),
                react_1["default"].createElement("div", { className: isVisible ? Selector_module_scss_1["default"]["white-line-height-2"] : Selector_module_scss_1["default"]["white-line-height-1"] },
                    react_1["default"].createElement("div", { className: isVisible ? Selector_module_scss_1["default"]["black-line-width-0"] : Selector_module_scss_1["default"]["black-line-width-50"] }),
                    react_1["default"].createElement("div", { className: isVisible ? Selector_module_scss_1["default"]["black-line-width-0"] : Selector_module_scss_1["default"]["black-line-width-50"] }))))));
};
exports["default"] = Selector;
