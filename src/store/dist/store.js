"use strict";
var _a;
exports.__esModule = true;
exports.setupStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var newsReducer_1 = require("./reducers/newsReducer");
var aboutFundAPI_1 = require("./services/aboutFundAPI");
var aboutFundCardAPI_1 = require("./services/aboutFundCardAPI");
var businessCardsAPI_1 = require("./services/businessCardsAPI");
var getCardsBusinessCarouselAPI_1 = require("./services/getCardsBusinessCarouselAPI");
var getCardsBusinnesStatisticAPI_1 = require("./services/getCardsBusinnesStatisticAPI");
var newsAPI_1 = require("./services/newsAPI");
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
                .concat(getCardsBusinnesStatisticAPI_1.cardsBusinnesStatisticAPI.middleware);
        }
    });
};
