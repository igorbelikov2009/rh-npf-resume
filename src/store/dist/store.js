"use strict";
var _a;
exports.__esModule = true;
exports.setupStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var newsReducer_1 = require("./reducers/newsReducer");
var aboutFundAPI_1 = require("./services/aboutFundAPI");
var aboutFundCardAPI_1 = require("./services/aboutFundCardAPI");
var businessCardsAPI_1 = require("./services/businessCardsAPI");
var fundIndicatorsAPI_1 = require("./services/fundIndicatorsAPI");
var getCardsBusinessCarouselAPI_1 = require("./services/getCardsBusinessCarouselAPI");
var getCardsBusinnesStatisticAPI_1 = require("./services/getCardsBusinnesStatisticAPI");
var investmentCardsAPI_1 = require("./services/investmentCardsAPI");
var investmentOptionsAPI_1 = require("./services/investmentOptionsAPI");
var investmentTablesAPI_1 = require("./services/investmentTablesAPI");
var investPercentAPI_1 = require("./services/investPercentAPI");
var newsAPI_1 = require("./services/newsAPI");
var optionsItemsReportingAPI_1 = require("./services/optionsItemsReportingAPI");
var reportingsAPI_1 = require("./services/reportingsAPI");
// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
var rootReducer = toolkit_1.combineReducers((_a = {
        newsReducer: newsReducer_1["default"]
    },
    _a[newsAPI_1.newsAPI.reducerPath] = newsAPI_1.newsAPI.reducer,
    _a[aboutFundAPI_1.aboutFundAPI.reducerPath] = aboutFundAPI_1.aboutFundAPI.reducer,
    _a[aboutFundCardAPI_1.aboutFundCardsAPI.reducerPath] = aboutFundCardAPI_1.aboutFundCardsAPI.reducer,
    _a[businessCardsAPI_1.businessCardsAPI.reducerPath] = businessCardsAPI_1.businessCardsAPI.reducer,
    _a[getCardsBusinessCarouselAPI_1.cardsBusinessCarouselAPI.reducerPath] = getCardsBusinessCarouselAPI_1.cardsBusinessCarouselAPI.reducer,
    _a[getCardsBusinnesStatisticAPI_1.cardsBusinnesStatisticAPI.reducerPath] = getCardsBusinnesStatisticAPI_1.cardsBusinnesStatisticAPI.reducer,
    _a[investmentCardsAPI_1.investmentCardsAPI.reducerPath] = investmentCardsAPI_1.investmentCardsAPI.reducer,
    _a[investmentOptionsAPI_1.investmentOptionsAPI.reducerPath] = investmentOptionsAPI_1.investmentOptionsAPI.reducer,
    _a[investPercentAPI_1.investPercentAPI.reducerPath] = investPercentAPI_1.investPercentAPI.reducer,
    _a[investmentTablesAPI_1.investmentTablesAPI.reducerPath] = investmentTablesAPI_1.investmentTablesAPI.reducer,
    _a[fundIndicatorsAPI_1.fundIndicatorsAPI.reducerPath] = fundIndicatorsAPI_1.fundIndicatorsAPI.reducer,
    _a[reportingsAPI_1.reportingsAPI.reducerPath] = reportingsAPI_1.reportingsAPI.reducer,
    _a[optionsItemsReportingAPI_1.optionsItemsReportingAPI.reducerPath] = optionsItemsReportingAPI_1.optionsItemsReportingAPI.reducer,
    _a));
// Создаём функцию setupStore, с помощью её мы будем конфигурировать
// наше редакс-хранилище. Без использования toolkit мы использовали
// createReducer. Сейчас используем configureStore().
exports.setupStore = function () {
    return toolkit_1.configureStore({
        reducer: rootReducer,
        middleware: function (getDefaultMiddleware) {
            return getDefaultMiddleware()
                .concat(newsAPI_1.newsAPI.middleware)
                .concat(aboutFundAPI_1.aboutFundAPI.middleware)
                .concat(aboutFundCardAPI_1.aboutFundCardsAPI.middleware)
                .concat(businessCardsAPI_1.businessCardsAPI.middleware)
                .concat(getCardsBusinessCarouselAPI_1.cardsBusinessCarouselAPI.middleware)
                .concat(getCardsBusinnesStatisticAPI_1.cardsBusinnesStatisticAPI.middleware)
                .concat(investmentCardsAPI_1.investmentCardsAPI.middleware)
                .concat(investmentOptionsAPI_1.investmentOptionsAPI.middleware)
                .concat(investPercentAPI_1.investPercentAPI.middleware)
                .concat(investmentTablesAPI_1.investmentTablesAPI.middleware)
                .concat(fundIndicatorsAPI_1.fundIndicatorsAPI.middleware)
                .concat(reportingsAPI_1.reportingsAPI.middleware)
                .concat(optionsItemsReportingAPI_1.optionsItemsReportingAPI.middleware);
        }
    });
};
