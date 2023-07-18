"use strict";
exports.__esModule = true;
var react_1 = require("react");
var investData_1 = require("../../../../data/investData");
var Selector_1 = require("../../../ui/select/Selector/Selector");
var Graph_1 = require("../Graph/Graph");
var Percents_1 = require("../Percents/Percents");
var PortfolioStructure_module_scss_1 = require("./PortfolioStructure.module.scss");
var PortfolioStructure = function (_a) {
    var isVisible = _a.isVisible, idOption = _a.idOption, selectorValue = _a.selectorValue, onClickSelector = _a.onClickSelector, emitCoords = _a.emitCoords, emitSelectorBottomLeft = _a.emitSelectorBottomLeft;
    var _b = react_1.useState(0), top = _b[0], setTop = _b[1];
    var _c = react_1.useState(0), bottom = _c[0], setBottom = _c[1];
    var _d = react_1.useState(0), left = _d[0], setLeft = _d[1];
    var _e = react_1.useState(0), width = _e[0], setWidth = _e[1];
    var selectorRef = react_1.useRef(null);
    var getSelectControllerCoords = function () {
        if (selectorRef.current) {
            setTop(selectorRef.current.getBoundingClientRect().top);
            setBottom(selectorRef.current.getBoundingClientRect().bottom);
            setLeft(selectorRef.current.getBoundingClientRect().left);
            setWidth(selectorRef.current.getBoundingClientRect().width);
            emitCoords(top, bottom, left, width);
        }
    };
    react_1.useEffect(function () {
        if (selectorRef.current) {
            setBottom(selectorRef.current.getBoundingClientRect().bottom);
            setLeft(selectorRef.current.getBoundingClientRect().left);
            emitSelectorBottomLeft(bottom, left);
        }
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [top]);
    var scrollHandler = function (event) {
        getSelectControllerCoords();
    };
    return (react_1["default"].createElement("section", { className: PortfolioStructure_module_scss_1["default"]["portfolie-structure"] },
        react_1["default"].createElement("h1", { className: PortfolioStructure_module_scss_1["default"]["portfolie-structure__heading"] }, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044F"),
        react_1["default"].createElement("div", { className: PortfolioStructure_module_scss_1["default"]["portfolie-structure__selection"], ref: selectorRef },
            react_1["default"].createElement(Selector_1["default"], { isVisible: isVisible, value: selectorValue, onClickSelector: onClickSelector })),
        react_1["default"].createElement("div", { className: PortfolioStructure_module_scss_1["default"]["portfolie-structure__content"] },
            react_1["default"].createElement(Graph_1["default"], null),
            investData_1.investPercent &&
                investData_1.investPercent.map(function (item, index) { return (react_1["default"].createElement(Percents_1["default"], { key: index, percent01: item.percent01, percent02: item.percent02, percent03: item.percent03, percent04: item.percent04, percent05: item.percent05, percent06: item.percent06, isVisible: Number(idOption) === index })); }))));
};
exports["default"] = PortfolioStructure;
