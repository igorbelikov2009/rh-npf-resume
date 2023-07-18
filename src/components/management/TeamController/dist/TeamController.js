"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TeamController_module_scss_1 = require("./TeamController.module.scss");
var TeamController = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", { className: TeamController_module_scss_1["default"]["management__department-title"] }, "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u0440"),
        react_1["default"].createElement("div", { className: TeamController_module_scss_1["default"]["management__list"] },
            react_1["default"].createElement("div", { className: TeamController_module_scss_1["default"]["management__offis-man"] },
                react_1["default"].createElement("p", { className: TeamController_module_scss_1["default"]["management__man-name"] }, "\u0422\u0440\u0443\u0448\u043A\u0438\u043D \u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u043E\u0432\u0438\u0447")))));
};
exports["default"] = TeamController;
