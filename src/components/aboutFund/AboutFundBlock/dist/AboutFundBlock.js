"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var aboutFundAPI_1 = require("../../../store/services/aboutFundAPI");
var CarouselHeader_1 = require("../../general/carousel/CarouselHeader/CarouselHeader");
var ServerError_1 = require("../../general/ServerError/ServerError");
var ServerIsLoading_1 = require("../../general/ServerIsLoading/ServerIsLoading");
var FundCarousel_1 = require("../FundCarousel/FundCarousel");
var AboutFundBlock_module_scss_1 = require("./AboutFundBlock.module.scss");
var AboutFundBlock = function () {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // для CarouselHeader
    // меняем цвет у стрелок и свойства курсора на "cursor: default;"
    var _a = react_1.useState(false), isHoveredLeft = _a[0], setIsHoveredLeft = _a[1];
    var _b = react_1.useState(true), isBlurredLeft = _b[0], setIsBlurredLeft = _b[1];
    var _c = react_1.useState(true), isHoveredRight = _c[0], setIsHoveredRight = _c[1];
    var _d = react_1.useState(false), isBlurredRight = _d[0], setIsBlurredRight = _d[1];
    // для MainCarousel // вычисляем и скролим scrollableElement
    var screenWidth = document.documentElement.clientWidth; // получаем ширину экрана
    var _e = react_1.useState(0), widthLink = _e[0], setWidthLink = _e[1]; // ширина контейнера ссылок
    var _f = react_1.useState(0), amountChildren = _f[0], setAmountChildren = _f[1]; // количество детей newsContainer
    var _g = react_1.useState(0), overallWidth = _g[0], setOverallWidth = _g[1]; // общая длина newsContainer
    var _h = react_1.useState(0), scrollWidth = _h[0], setScrollWidth = _h[1]; // длина прокрутки scrollableElement
    var _j = react_1.useState(0), right = _j[0], setRight = _j[1]; // значение прокрутки scrollableElement, записываемое в его атрибут style
    //
    var _k = react_1.useState(0), q = _k[0], setQ = _k[1]; // значение счётчика, индекс columns[q], который по центру экрана
    var _l = react_1.useState(0), j = _l[0], setJ = _l[1]; // если (screenWidth > 855), то по центру экрана два элемента:
    //  columns[q] и columns[j]
    // ширина контейнера ссылок
    var getLinkContainerWidth = function (width) {
        setWidthLink(width);
    };
    // console.log(widthLink);
    var _m = aboutFundAPI_1.aboutFundAPI.useGetAboutFundColumnsQuery(10), aboutFundColumns = _m.data, isLoading = _m.isLoading, isError = _m.isError;
    react_1.useEffect(function () {
        if (aboutFundColumns)
            // получаем количество детей массива, новостных колонок (NewsLinkContainer)
            setAmountChildren(aboutFundColumns.length);
        // высчитываем общую длину карусельной ленты (carousel-tape)
        setOverallWidth(widthLink * amountChildren);
    }, [aboutFundColumns, amountChildren, widthLink]);
    // console.log("amountChildren :" + amountChildren);
    // console.log("overallWidth:" + overallWidth);
    // =================================
    // Получаем значение q
    var getValueQOnClickArrowLeft = function () {
        if (q !== 0) {
            setQ(function (prev) { return prev - 1; });
        }
        if (q < 0) {
            setQ(0);
        }
    };
    var getValueQOnClickArrowRight = function () {
        if (screenWidth < 855) {
            if (q < amountChildren - 1) {
                setQ(function (prev) { return prev + 1; });
            }
        }
        if (screenWidth > 855) {
            if (q < amountChildren - 2) {
                setQ(function (prev) { return prev + 1; });
            }
        }
    };
    // console.log("q: " + q);
    // get value j в зависимости от ширины экрана screenWidth (< 855 или > 855 )
    // во время постройки DOM, определяем данный метод в хук useEffect.
    react_1.useEffect(function () {
        if (screenWidth < 855) {
            setJ(q);
        }
        else {
            setJ(q + 1);
        }
    }, [q, screenWidth]);
    // console.log("q: " + q, "j: " + j);
    // scrolling
    // скролим влево
    react_1.useEffect(function () {
        setScrollWidth(q * widthLink);
        setRight(q * widthLink);
    }, [q, widthLink]);
    // скролим вправо
    react_1.useEffect(function () {
        setScrollWidth(q * widthLink);
        setRight(q * widthLink);
        if (screenWidth < 855) {
            if (scrollWidth >= overallWidth) {
                setRight(overallWidth - widthLink);
            }
        }
        if (screenWidth > 855) {
            if (scrollWidth >= overallWidth - widthLink) {
                setRight(overallWidth - 2 * widthLink);
            }
        }
    }, [overallWidth, q, screenWidth, scrollWidth, widthLink]);
    // console.log("scrollWidth :" + scrollWidth);
    // console.log("right =" + right);
    // меняем цвет у стрелок и свойства курсора на "cursor: default;"
    // меняем цвет у стрелок и свойства курсора на "cursor: default;"
    var changeColorArrowsOnClickArrowLeft = function () {
        setIsHoveredRight(true);
        setIsBlurredRight(false);
        if (q === 1) {
            setIsHoveredLeft(false);
            setIsBlurredLeft(true);
        }
    };
    var changeColorArrowOnClickArrowRight = function () {
        setIsHoveredLeft(true);
        setIsBlurredLeft(false);
        if (screenWidth < 855) {
            if (j === amountChildren - 1) {
                setIsHoveredRight(false);
                setIsBlurredRight(true);
            }
        }
        else if (screenWidth > 855) {
            if (j === amountChildren - 2) {
                setIsHoveredRight(false);
                setIsBlurredRight(true);
            }
        }
    };
    // клик по левой стрелке
    var onClickLeftArrow = function () {
        getValueQOnClickArrowLeft();
        changeColorArrowsOnClickArrowLeft();
    };
    // клик по правой стрелке
    var onClickRightArrow = function () {
        getValueQOnClickArrowRight();
        changeColorArrowOnClickArrowRight();
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        isLoading && react_1["default"].createElement(ServerIsLoading_1["default"], null),
        isError && react_1["default"].createElement(ServerError_1["default"], null),
        react_1["default"].createElement(CarouselHeader_1["default"], { headerTitle: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0424\u043E\u043D\u0434\u0430", isBlurredLeft: isBlurredLeft, isBlurredRight: isBlurredRight, isHoveredLeft: isHoveredLeft, isHoveredRight: isHoveredRight, onClickLeft: onClickLeftArrow, onClickRight: onClickRightArrow }),
        react_1["default"].createElement("div", { className: AboutFundBlock_module_scss_1["default"]["carousel"] },
            react_1["default"].createElement("div", { className: AboutFundBlock_module_scss_1["default"]["scrollableElement"], style: { right: right + "px" } },
                react_1["default"].createElement(FundCarousel_1["default"], { columns: aboutFundColumns, jj: j, qq: q, emitWidthColumn: getLinkContainerWidth })))));
};
exports["default"] = AboutFundBlock;
