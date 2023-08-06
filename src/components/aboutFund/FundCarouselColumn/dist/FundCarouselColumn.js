"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FundCarouselColumn_module_scss_1 = require("./FundCarouselColumn.module.scss");
var FundCarouselColumn = function (_a) {
    var isClear = _a.isClear, title = _a.title, description = _a.description, emitWidthColumn = _a.emitWidthColumn;
    var refColumn = react_1.useRef(null);
    react_1.useEffect(function () {
        var _a;
        if (refColumn.current) {
            emitWidthColumn((_a = refColumn.current) === null || _a === void 0 ? void 0 : _a.offsetWidth);
        }
    }, [emitWidthColumn]);
    //   console.log(refColumn.current?.offsetWidth);
    return (react_1["default"].createElement("div", { className: isClear ? FundCarouselColumn_module_scss_1["default"]["column_clear"] : FundCarouselColumn_module_scss_1["default"]["column"], ref: refColumn },
        react_1["default"].createElement("h1", { className: FundCarouselColumn_module_scss_1["default"]["title"] }, title),
        react_1["default"].createElement("div", { className: FundCarouselColumn_module_scss_1["default"]["line"] }),
        react_1["default"].createElement("p", { className: FundCarouselColumn_module_scss_1["default"]["description"] }, description)));
};
exports["default"] = FundCarouselColumn;
