"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PensionInfo_module_scss_1 = require("./PensionInfo.module.scss");
var PensionInfo = function (_a) {
    var pensionValue = _a.pensionValue, generalAccumValue = _a.generalAccumValue;
    return (react_1["default"].createElement("div", { className: PensionInfo_module_scss_1["default"]["pension-info"] },
        react_1["default"].createElement("div", { className: PensionInfo_module_scss_1["default"]["pension-info__container"] },
            react_1["default"].createElement("div", { className: PensionInfo_module_scss_1["default"]["pension-info__in-future"] },
                react_1["default"].createElement("div", { className: PensionInfo_module_scss_1["default"]["pension-info__in-future-container"] },
                    react_1["default"].createElement("p", { className: PensionInfo_module_scss_1["default"]["pension-info__pension"] },
                        pensionValue,
                        " \u20BD."),
                    react_1["default"].createElement("p", { className: PensionInfo_module_scss_1["default"]["pension-info__title"] },
                        "\u041F\u0435\u043D\u0441\u0438\u044F",
                        react_1["default"].createElement("span", { className: PensionInfo_module_scss_1["default"]["pension-info__span"] }, " \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C")))),
            react_1["default"].createElement("div", { className: PensionInfo_module_scss_1["default"]["pension-info__storage"] },
                react_1["default"].createElement("div", { className: PensionInfo_module_scss_1["default"]["pension-info__calculation"] },
                    react_1["default"].createElement("p", { className: PensionInfo_module_scss_1["default"]["pension-info__sum"] },
                        generalAccumValue,
                        " \u20BD."),
                    react_1["default"].createElement("p", { className: PensionInfo_module_scss_1["default"]["pension-info__title"] }, "\u041D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u043E")),
                react_1["default"].createElement("div", { className: PensionInfo_module_scss_1["default"]["pension-info__calculation"] },
                    react_1["default"].createElement("div", { className: PensionInfo_module_scss_1["default"]["pension-info__calculation-container"] },
                        react_1["default"].createElement("p", { className: PensionInfo_module_scss_1["default"]["pension-info__social"] }, "273 000 \u20BD."),
                        react_1["default"].createElement("p", { className: PensionInfo_module_scss_1["default"]["pension-info__title"] }, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0441\u043E\u0446. \u0432\u044B\u0447\u0435\u0442\u0430")))))));
};
exports["default"] = PensionInfo;
