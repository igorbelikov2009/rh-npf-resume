"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var UserDate_1 = require("../api/UserDate/UserDate");
var InvestTop_jpg_1 = require("../assets/images/invest/InvestTop.jpg");
var Cards_1 = require("../components/general/cards/Cards/Cards");
var TopBlock_1 = require("../components/general/TopBlock/TopBlock");
var CompositionReserves_1 = require("../components/investment/compositionReserves/CompositionReserves/CompositionReserves");
var InvestmentArchive_1 = require("../components/investment/InvestmentArchive/InvestmentArchive");
var InvestmentDescription_1 = require("../components/investment/InvestmentDescription/InvestmentDescription");
var PortfolioStructure_1 = require("../components/investment/portfolioStructure/PortfolioStructure/PortfolioStructure");
var OptionBlockForSelector_1 = require("../components/ui/select/OptionBlockForSelector/OptionBlockForSelector");
var investData_1 = require("../data/investData");
require("../styles/investment.scss");
var InvestmentPage = function () {
    var _a = react_1.useState(0), clientHeight = _a[0], setClientHeight = _a[1];
    // firstSelector
    var _b = react_1.useState("30 ноября 2021 г."), firstCurrentValue = _b[0], setFirstCurrentValue = _b[1];
    var _c = react_1.useState(0), setFirstSelectorTop = _c[1];
    var _d = react_1.useState(0), firstSelectorBottom = _d[0], setFirstSelectorBottom = _d[1];
    var _e = react_1.useState(0), firstSelectorLeft = _e[0], setFirstSelectorLeft = _e[1];
    var _f = react_1.useState(0), firstSelectorWidth = _f[0], setFirstSelectorWidth = _f[1];
    // firstOptionsBlock
    var _g = react_1.useState("0"), firstBlockIdOption = _g[0], setFirstBlockIdOption = _g[1];
    var _h = react_1.useState(0), firstBlockHeight = _h[0], setFirstBlockHeight = _h[1];
    var _j = react_1.useState(0), firstBlockTop = _j[0], setFirstBlockTop = _j[1];
    var _k = react_1.useState(false), firstBlockVisible = _k[0], setFirstBlockVisible = _k[1];
    // secondSelector
    var _l = react_1.useState("30 ноября 2021 г."), secondCurrentValue = _l[0], setSecondCurrentValue = _l[1];
    var _m = react_1.useState(0), setSecondSelectorTop = _m[1];
    var _o = react_1.useState(0), secondSelectorBottom = _o[0], setSecondSelectorBottom = _o[1];
    var _p = react_1.useState(0), secondSelectorLeft = _p[0], setSecondSelectorLeft = _p[1];
    var _q = react_1.useState(0), secondSelectorWidth = _q[0], setSecondSelectorWidth = _q[1];
    // secondOptionsBlock secondBlock
    var _r = react_1.useState("0"), secondBlockIdOption = _r[0], setSecondBlockIdOption = _r[1];
    var _s = react_1.useState(0), secondBlockHeight = _s[0], setSecondBlockHeight = _s[1];
    var _t = react_1.useState(0), secondBlockTop = _t[0], setSecondBlockTop = _t[1];
    var _u = react_1.useState(false), secondBlockVisible = _u[0], setSecondBlockVisible = _u[1];
    // ПОлучаем данныес сервера
    // const { data: investmentCards, isError } = investmentCardsApi.useGetInvestmentCardsQuery();
    // const { data: investmentOptions } = investmentOptionsAPI.useGetInvestmentOptionsQuery();
    var data1 = investData_1.investmentCards;
    var data2 = investData_1.investmentOptions;
    var formattedOptionsItems = [];
    if (investData_1.investmentOptions) {
        formattedOptionsItems = investData_1.investmentOptions.map(function (item) { return ({
            date: String(UserDate_1["default"].format(new Date(item.date))),
            value: String(UserDate_1["default"].format(new Date(item.date))),
            id: String(item.id)
        }); });
    }
    var refFirstSelectBlock = react_1.useRef(null);
    react_1.useEffect(function () {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
    });
    // вызов функции получения высоты блоков опций OptionsBLock при скроллинге
    var scrollHandler = function (event) {
        getOptionsBlockHeight();
    };
    // Получаем значения bottom и left (selectController) из компонента PortfolioStructure.tsx
    // Они нужны для первичного установления координат при useEffect, до вызова scrollHandler
    var getFirstSelectorBottomLeft = function (bottom, left) {
        setFirstSelectorBottom(bottom);
        setFirstSelectorLeft(left);
    };
    // Получаем значения bottom и left (selectController) из компонента CompositionReserves.tsx
    // Они нужны для первичного установления координат при useEffect, до вызова scrollHandler
    var getSecondSelectorBottomLeft = function (bottom, left) {
        setSecondSelectorBottom(bottom);
        setSecondSelectorLeft(left);
    };
    // useEffect для первых first Controller и OptionsBlock
    react_1.useEffect(function () {
        setFirstBlockTop(firstSelectorBottom);
        if (firstSelectorBottom <= 0) {
            setFirstBlockTop(0);
        }
        else if (firstSelectorBottom >= clientHeight - firstBlockHeight && firstSelectorBottom <= clientHeight) {
            setFirstBlockTop(firstSelectorBottom - firstBlockHeight);
        }
        else if (firstSelectorBottom >= clientHeight) {
            setFirstBlockTop(clientHeight - firstBlockHeight);
        }
    }, [clientHeight, firstBlockHeight, firstSelectorBottom]);
    // useEffect для вторых second Controller и OptionsBlock
    react_1.useEffect(function () {
        setSecondBlockTop(secondSelectorBottom);
        if (secondSelectorBottom <= 0) {
            setSecondBlockTop(0);
        }
        else if (secondSelectorBottom >= clientHeight - secondBlockHeight && secondSelectorBottom <= clientHeight) {
            setSecondBlockTop(secondSelectorBottom - secondBlockHeight);
        }
        else if (secondSelectorBottom >= clientHeight) {
            setSecondBlockTop(clientHeight - secondBlockHeight);
        }
    }, [clientHeight, secondBlockHeight, secondSelectorBottom]);
    // Клик первого контроллера (first Controller)
    var onClickFirstSelectController = function () {
        // setFirstBlockVisible((prev) => !prev);
        setFirstBlockVisible(!firstBlockVisible);
        setSecondBlockVisible(false);
    };
    // Клик второго контроллера (second Controller)
    var onClickSecondSelectController = function () {
        setSecondBlockVisible(!secondBlockVisible);
        setFirstBlockVisible(false);
    };
    // получаем клик из first OptionsBlock
    var onClickFirstOptionsBlock = function () {
        setFirstBlockVisible(false);
    };
    // получаем клик из Second OptionsBlock
    var onClickSecondOptionsBlock = function () {
        setSecondBlockVisible(false);
    };
    // получаем изменения выбранного значения из first OptionsBlock
    var onChangeFirstOptionsBlock = function (value, id) {
        setFirstCurrentValue(value);
        setFirstBlockIdOption(id);
    };
    // получаем изменения выбранного значения из Second OptionsBlock
    var onChangeSecondOptionsBlock = function (value, id) {
        setSecondCurrentValue(value);
        setSecondBlockIdOption(id);
    };
    // Функция получения высоты окна браузера.
    var getClientHeight = function () {
        setClientHeight(window.innerHeight);
    };
    // функция получения высоты блоков опций
    var getOptionsBlockHeight = function () {
        if (refFirstSelectBlock.current) {
            setFirstBlockHeight(refFirstSelectBlock.current.getBoundingClientRect().height);
            setSecondBlockHeight(refFirstSelectBlock.current.getBoundingClientRect().height);
        }
    };
    //  Получаем top, bottom, left, width из компонента PortfolioStructure.tsx при скроллинге
    var onScrollPortfolioStructure = function (top, bottom, left, width) {
        setFirstSelectorTop(top);
        setFirstSelectorBottom(bottom);
        setFirstSelectorLeft(left);
        setFirstSelectorWidth(width);
        // Делаем вызов функции
        getClientHeight();
    };
    //  Получаем top, bottom, left, width из компонента CompositionReserves.tsx при скроллинге
    var onScrollCompositionReserves = function (top, bottom, left, width) {
        setSecondSelectorTop(top);
        setSecondSelectorBottom(bottom);
        setSecondSelectorLeft(left);
        setSecondSelectorWidth(width);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u0430\u044F", headingSpan: "\u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C", subheading: "\u0410\u041E \u041D\u041F\u0424 \u00AB\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441 \u043F\u0435\u043D\u0441\u0438\u0438\u00BB \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0435\u0437\u0435\u0440\u0432\u043E\u0432 \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0424\u043E\u043D\u0434\u0430 \u043D\u0430 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u0445 \u0441\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u0438, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u0424 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439", image: InvestTop_jpg_1["default"] }),
        investData_1.investmentCards && react_1["default"].createElement(Cards_1["default"], { cards: investData_1.investmentCards }),
        react_1["default"].createElement("div", { id: "portfolioStructure" },
            react_1["default"].createElement(PortfolioStructure_1["default"], { isVisible: firstBlockVisible, selectorValue: firstCurrentValue, idOption: firstBlockIdOption, onClickSelector: onClickFirstSelectController, emitCoords: onScrollPortfolioStructure, emitSelectorBottomLeft: getFirstSelectorBottomLeft })),
        react_1["default"].createElement(CompositionReserves_1["default"], { isVisible: secondBlockVisible, selectorValue: secondCurrentValue, idOption: secondBlockIdOption, onClickSelector: onClickSecondSelectController, emitCoords: onScrollCompositionReserves, emitSelectorBottomLeft: getSecondSelectorBottomLeft }),
        react_1["default"].createElement(InvestmentArchive_1["default"], null),
        react_1["default"].createElement(InvestmentDescription_1["default"], null),
        react_1["default"].createElement("div", { ref: refFirstSelectBlock, style: {
                top: firstBlockTop + "px",
                left: firstSelectorLeft + 6 + "px",
                width: firstSelectorWidth - 12 + "px"
            }, className: firstBlockVisible ? "options-block-visible" : "options-block-hidden" },
            react_1["default"].createElement(OptionBlockForSelector_1["default"], { optionsItems: formattedOptionsItems, emitValue: onChangeFirstOptionsBlock, onClickOptionsBlock: onClickFirstOptionsBlock, currentValue: firstCurrentValue })),
        react_1["default"].createElement("div", { style: {
                top: secondBlockTop + "px",
                left: secondSelectorLeft + 6 + "px",
                width: secondSelectorWidth - 12 + "px"
            }, className: secondBlockVisible ? "options-block-visible" : "options-block-hidden" },
            react_1["default"].createElement(OptionBlockForSelector_1["default"], { optionsItems: formattedOptionsItems, emitValue: onChangeSecondOptionsBlock, onClickOptionsBlock: onClickSecondOptionsBlock, currentValue: secondCurrentValue }))));
};
exports["default"] = InvestmentPage;
