"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TopBlock_1 = require("../components/general/TopBlock/TopBlock");
var mainTop_jpg_1 = require("../assets/images/main/mainTop.jpg");
var Info_1 = require("../components/mainPage/Info/Info");
var Cards_1 = require("../components/general/cards/Cards/Cards");
var Calculator_1 = require("../components/mainPage/calculator/Calculator/Calculator");
var ImagesCalculator_1 = require("../components/mainPage/ImagesCalculator/ImagesCalculator");
var NewsBlock_1 = require("../components/mainPage/newsBlock/NewsBlock/NewsBlock");
var mainPageData_1 = require("../data/mainPageData");
var SliderString_1 = require("../components/ui/SliderString/SliderString");
var MainPage = function () {
    var handlerSlider = function (value) {
        console.log(value);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u0423\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C,", headingSpan: " \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430\u044F \u043A\u0430\u0436\u0434\u043E\u043C\u0443", subheading: "\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u044C\u0442\u0435 \u0441\u0435\u0431\u0435 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0439\u0442\u0435", subheadingSpan: " \u043A \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0432\u043E\u0438\u0445 \u0441\u0430\u043C\u044B\u0445 \u0441\u043C\u0435\u043B\u044B\u0445 \u043F\u043B\u0430\u043D\u043E\u0432!", image: mainTop_jpg_1["default"] }),
        react_1["default"].createElement(Info_1["default"], null),
        react_1["default"].createElement(Cards_1["default"], { cards: mainPageData_1.cardsMainPage }),
        react_1["default"].createElement("div", { id: "calculator" },
            react_1["default"].createElement(Calculator_1["default"], null)),
        react_1["default"].createElement(ImagesCalculator_1["default"], null),
        react_1["default"].createElement(NewsBlock_1["default"], null),
        react_1["default"].createElement(SliderString_1["default"], { title: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442, \u043B\u0435\u0442", name: "ageSlider", min: "18", max: "60", step: "1", value: "30", emitValue: handlerSlider })));
};
exports["default"] = MainPage;
