"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Controller_module_scss_1 = require("./Controller.module.scss");
var Controller = function (_a) {
    // console.log(ifPressed);
    var value = _a.value, ifPressed = _a.ifPressed, onClickController = _a.onClickController;
    return (react_1["default"].createElement("div", { className: Controller_module_scss_1["default"]["select-controller"] },
        react_1["default"].createElement("div", { className: Controller_module_scss_1["default"]["changing-title"] },
            react_1["default"].createElement("div", { className: ifPressed ? Controller_module_scss_1["default"]["border-gray"] : Controller_module_scss_1["default"]["border-white"] },
                react_1["default"].createElement("div", { className: ifPressed ? Controller_module_scss_1["default"]["container-backgr-gray"] : Controller_module_scss_1["default"]["container-backgr-white"], onClick: onClickController },
                    react_1["default"].createElement("div", { className: Controller_module_scss_1["default"]["controller-date"] },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("p", { className: Controller_module_scss_1["default"]["select-controller-date"] }, value))),
                    react_1["default"].createElement("div", { className: Controller_module_scss_1["default"].icon },
                        react_1["default"].createElement("img", { className: ifPressed ? Controller_module_scss_1["default"]["image-rotate-180"] : Controller_module_scss_1["default"]["image-rotate-0"], src: "/icons/triple/Arrow Down/Dark.svg", alt: "Arrow" }))),
                react_1["default"].createElement("div", { className: ifPressed ? Controller_module_scss_1["default"]["white-line-height-2"] : Controller_module_scss_1["default"]["white-line-height-1"] },
                    react_1["default"].createElement("div", { className: ifPressed ? Controller_module_scss_1["default"]["black-line-width-0"] : Controller_module_scss_1["default"]["black-line-width-50"] }),
                    react_1["default"].createElement("div", { className: ifPressed ? Controller_module_scss_1["default"]["black-line-width-0"] : Controller_module_scss_1["default"]["black-line-width-50"] }))))));
};
exports["default"] = Controller;
