"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MyModal_module_scss_1 = require("./MyModal.module.scss");
var MyModal = function (_a) {
    var children = _a.children, isVisible = _a.isVisible, setVisible = _a.setVisible;
    var rootClasses = [MyModal_module_scss_1["default"].myModal];
    // С помощью этой конструкции мы определяем, добавлять класс (styles.active) или нет.
    if (isVisible) {
        rootClasses.push(MyModal_module_scss_1["default"].active);
    }
    return (
    // join(" ") возвращает строку, и в этой строке будет 2 класса, склеенных по пробелу
    react_1["default"].createElement("div", { className: rootClasses.join(" "), onClick: function () { return setVisible(false); } },
        react_1["default"].createElement("div", { className: MyModal_module_scss_1["default"].myModalContent, onClick: function (e) { return e.stopPropagation(); } }, children)));
};
exports["default"] = MyModal;
