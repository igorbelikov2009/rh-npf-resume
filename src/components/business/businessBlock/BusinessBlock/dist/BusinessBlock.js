"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CarouselHeader_1 = require("../../../general/carousel/CarouselHeader/CarouselHeader");
var BusinessCarousel_1 = require("../BusinessCarousel/BusinessCarousel");
var ChangingTitles_1 = require("../ChangingTitles/ChangingTitles");
var BusinessBlock_module_scss_1 = require("./BusinessBlock.module.scss");
var BusinessBlock = function () {
    // для CarouselHeader
    // меняем цвет у стрелок и свойства курсора на "cursor: default;"
    var _a = react_1.useState(false), isHoveredLeft = _a[0], setIsHoveredLeft = _a[1];
    var _b = react_1.useState(true), isBlurredLeft = _b[0], setIsBlurredLeft = _b[1];
    var _c = react_1.useState(true), isHoveredRight = _c[0], setIsHoveredRight = _c[1];
    var _d = react_1.useState(false), isBlurredRight = _d[0], setIsBlurredRight = _d[1];
    var _e = react_1.useState(0), carouselValue = _e[0], setCarouselValue = _e[1];
    var _f = react_1.useState(0), amountChildren = _f[0], setAmountChildren = _f[1];
    var _g = react_1.useState(0), right = _g[0], setRight = _g[1]; // значение прокрутки scrollableElement, записываемое в его атрибут style
    var stepScrolling = react_1.useState(224)[0]; // шаг прокрутки
    var subheadings = [
        { title: "Сохранение статуса и образа жизни после выхода на пенсию." },
        { title: "Увеличение лояльности работников к работодателю." },
        { title: "Комфортное увольнение на пенсию без существенной потери доходов." },
        {
            title: "Уплата пенсионных взносов в пользу работника зависит от соблюдения им трудовой дисциплины."
        },
        {
            title: "Зависимость размера пенсионных взносов от продолжительности участия в пенсионной программе, должностных грейдов и стажа."
        },
        { title: "Использование льгот по налогу на прибыль." },
        { title: "Передача Фонду функции социальной поддержки." },
    ];
    var getAmountChildren = function (value) {
        setAmountChildren(value);
    };
    // getCarouselValue
    var getCarouselValueOnClickArrowLeft = function () {
        if (carouselValue !== 0) {
            setCarouselValue(function (prev) { return prev - 1; });
        }
        if (carouselValue < 0) {
            setCarouselValue(0);
        }
    };
    // getCarouselValue
    var getCarouselValueOnClickArrowRight = function () {
        if (carouselValue < amountChildren - 1) {
            setCarouselValue(function (prev) { return prev + 1; });
        }
        else if (carouselValue === amountChildren - 1) {
            // console.log("Что-то надо сделать");
        }
    };
    // console.log("carouselValue: " + carouselValue);
    react_1.useEffect(function () {
        setRight(carouselValue * stepScrolling);
    }, [carouselValue, stepScrolling]);
    // меняем цвет у стрелок и свойства курсора на "cursor: default;"
    var changeColorArrowsOnClickArrowLeft = function () {
        setIsHoveredRight(true);
        setIsBlurredRight(false);
        if (carouselValue === 1) {
            setIsHoveredLeft(false);
            setIsBlurredLeft(true);
        }
    };
    var changeColorArrowOnClickArrowRight = function () {
        if (carouselValue < amountChildren - 2) {
            setIsHoveredLeft(true);
            setIsBlurredLeft(false);
        }
        else {
            setIsHoveredRight(false);
            setIsBlurredRight(true);
        }
    };
    var changeColorArrowOnClickRadio = function () {
        if (carouselValue === 0) {
            setIsHoveredLeft(false);
            setIsBlurredLeft(true);
            setIsHoveredRight(true);
            setIsBlurredRight(false);
        }
        else if (carouselValue === amountChildren - 1) {
            setIsHoveredLeft(true);
            setIsBlurredLeft(false);
            setIsHoveredRight(false);
            setIsBlurredRight(true);
        }
        else {
            setIsHoveredLeft(true);
            setIsBlurredLeft(false);
            setIsHoveredRight(true);
            setIsBlurredRight(false);
        }
    };
    // клик по CarouselRadio
    var onChangeCarouselRadio = function (value) {
        setCarouselValue(Number(value));
        changeColorArrowOnClickRadio();
    };
    // клик по левой стрелке
    var onClickLeftArrow = function () {
        changeColorArrowsOnClickArrowLeft();
        getCarouselValueOnClickArrowLeft();
    };
    // клик по правой стрелке
    var onClickRightArrow = function () {
        changeColorArrowOnClickArrowRight();
        getCarouselValueOnClickArrowRight();
    };
    return (react_1["default"].createElement("section", { className: BusinessBlock_module_scss_1["default"]["carousel"] },
        react_1["default"].createElement("div", { className: BusinessBlock_module_scss_1["default"]["carousel__carousel-header"] },
            react_1["default"].createElement(CarouselHeader_1["default"], { headerSubtitle: "\u041A\u0430\u043A\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0440\u0435\u0448\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B", isBlurredLeft: isBlurredLeft, isBlurredRight: isBlurredRight, isHoveredLeft: isHoveredLeft, isHoveredRight: isHoveredRight, onClickLeft: onClickLeftArrow, onClickRight: onClickRightArrow }),
            react_1["default"].createElement("div", { className: BusinessBlock_module_scss_1["default"]["carousel__container"] },
                react_1["default"].createElement("div", { className: BusinessBlock_module_scss_1["default"]["carousel__scrollableElement"], style: { right: right + "px" } },
                    react_1["default"].createElement(BusinessCarousel_1["default"], { currentValue: carouselValue, emitAmountChildren: getAmountChildren, emitValue: onChangeCarouselRadio })))),
        react_1["default"].createElement("div", { className: BusinessBlock_module_scss_1["default"]["carousel__container-changing-titles"] }, subheadings.map(function (heading, index) { return (react_1["default"].createElement(ChangingTitles_1["default"], { key: index, title: heading.title, isActive: index === carouselValue })); }))));
};
exports["default"] = BusinessBlock;
