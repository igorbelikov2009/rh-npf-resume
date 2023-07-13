"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var CarouselHeader_1 = require("../../general/carousel/CarouselHeader/CarouselHeader");
var FundCarousel_1 = require("../FundCarousel/FundCarousel");
var AboutFundBlock_module_scss_1 = require("./AboutFundBlock.module.scss");
var AboutFundBlock = function () {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var aboutFundColumns = [
        {
            title: "2002",
            description: "Дата основания Фонда как части финансовой группы ING в России. Уже в 2003 году в Фонд приходят первые крупные клиенты, что дало Фонду существенный толчок к развитию и сделало его привлекательным в глазах будущих партнеров."
        },
        {
            title: "2003",
            description: "В Фонд приходят первые крупные клиенты."
        },
        {
            title: "2008",
            description: "Клиентами Фонда стали более 70 наших текущих партнеров."
        },
        {
            title: "2009",
            description: "В связи с изменением бизнес стратегии компании ING в России, Фонд был выкуплен крупнейшей Британской страховой компанией AVIVA, что только лишь усилило позиции Фонда."
        },
        {
            title: "2013",
            description: "Фонд перешел под управление компании WELBI на 100% контролировавшейся НПФ “Благосостояние”."
        },
        {
            title: "2017",
            description: "В результате сделки Фонд вошел в объединенную группу компаний под управлением ООО “Группа Ренессанс Страхование”, одного из крупнейших провайдеров добровольного страхования в России."
        },
        {
            title: "2018",
            description: "Состоялась реорганизация в акционерное общество с одновременным переименованием Фонда в АО НПФ «Ренессанс пенсии»."
        },
    ];
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
    react_1.useEffect(function () {
        if (aboutFundColumns)
            // получаем количество детей массива, новостных колонок (NewsLinkContainer)
            setAmountChildren(aboutFundColumns.length);
        // высчитываем общую длину карусельной ленты (carousel-tape)
        setOverallWidth(widthLink * amountChildren);
    }, [amountChildren, widthLink, aboutFundColumns]);
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
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(CarouselHeader_1["default"], { headerTitle: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0424\u043E\u043D\u0434\u0430", isBlurredLeft: isBlurredLeft, isBlurredRight: isBlurredRight, isHoveredLeft: isHoveredLeft, isHoveredRight: isHoveredRight, onClickLeft: onClickLeftArrow, onClickRight: onClickRightArrow }),
        react_1["default"].createElement("div", { className: AboutFundBlock_module_scss_1["default"]["carousel"] },
            react_1["default"].createElement("div", { className: AboutFundBlock_module_scss_1["default"]["scrollableElement"], style: { right: right + "px" } },
                react_1["default"].createElement(FundCarousel_1["default"], { columns: aboutFundColumns, jj: j, qq: q, emitWidthColumn: getLinkContainerWidth })))));
};
exports["default"] = AboutFundBlock;
