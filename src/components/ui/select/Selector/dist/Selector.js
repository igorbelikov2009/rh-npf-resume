"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Selector_module_scss_1 = require("./Selector.module.scss");
var Selector = function (_a) {
    var value = _a.value, ifPressed = _a.ifPressed, onClickSelector = _a.onClickSelector;
    return (react_1["default"].createElement("div", { className: Selector_module_scss_1["default"]["select-controller"] },
        react_1["default"].createElement("div", { className: Selector_module_scss_1["default"]["changing-title"] },
            react_1["default"].createElement("div", { className: ifPressed ? Selector_module_scss_1["default"]["border-gray"] : Selector_module_scss_1["default"]["border-white"] },
                react_1["default"].createElement("div", { className: ifPressed ? Selector_module_scss_1["default"]["container-backgr-gray"] : Selector_module_scss_1["default"]["container-backgr-white"], onClick: onClickSelector },
                    react_1["default"].createElement("div", { className: Selector_module_scss_1["default"]["controller-date"] },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("p", { className: Selector_module_scss_1["default"]["select-controller-date"] }, value))),
                    react_1["default"].createElement("div", { className: Selector_module_scss_1["default"].icon },
                        react_1["default"].createElement("img", { className: ifPressed ? Selector_module_scss_1["default"]["image-rotate-180"] : Selector_module_scss_1["default"]["image-rotate-0"], src: "/icons/triple/Arrow Down/Dark.svg", alt: "Arrow" }))),
                react_1["default"].createElement("div", { className: ifPressed ? Selector_module_scss_1["default"]["white-line-height-2"] : Selector_module_scss_1["default"]["white-line-height-1"] },
                    react_1["default"].createElement("div", { className: ifPressed ? Selector_module_scss_1["default"]["black-line-width-0"] : Selector_module_scss_1["default"]["black-line-width-50"] }),
                    react_1["default"].createElement("div", { className: ifPressed ? Selector_module_scss_1["default"]["black-line-width-0"] : Selector_module_scss_1["default"]["black-line-width-50"] }))))));
};
exports["default"] = Selector;
