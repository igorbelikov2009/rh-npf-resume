import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/newsReducer";
import { aboutFundAPI } from "./services/aboutFundAPI";
import { aboutFundCardsAPI } from "./services/aboutFundCardAPI";
import { businessCardsAPI } from "./services/businessCardsAPI";
import { fundIndicatorsAPI } from "./services/fundIndicatorsAPI";
import { cardsBusinessCarouselAPI } from "./services/getCardsBusinessCarouselAPI";
import { cardsBusinnesStatisticAPI } from "./services/getCardsBusinnesStatisticAPI";
import { investmentCardsAPI } from "./services/investmentCardsAPI";
import { investmentOptionsAPI } from "./services/investmentOptionsAPI";
import { investmentTablesAPI } from "./services/investmentTablesAPI";
import { investPercentAPI } from "./services/investPercentAPI";
import { newsAPI } from "./services/newsAPI";
import { optionsItemsReportingAPI } from "./services/optionsItemsReportingAPI";
import { reportingsAPI } from "./services/reportingsAPI";

// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
const rootReducer = combineReducers({
  newsReducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
  [aboutFundAPI.reducerPath]: aboutFundAPI.reducer,
  [aboutFundCardsAPI.reducerPath]: aboutFundCardsAPI.reducer,
  [businessCardsAPI.reducerPath]: businessCardsAPI.reducer,
  [cardsBusinessCarouselAPI.reducerPath]: cardsBusinessCarouselAPI.reducer,
  [cardsBusinnesStatisticAPI.reducerPath]: cardsBusinnesStatisticAPI.reducer,
  [investmentCardsAPI.reducerPath]: investmentCardsAPI.reducer,
  [investmentOptionsAPI.reducerPath]: investmentOptionsAPI.reducer,
  [investPercentAPI.reducerPath]: investPercentAPI.reducer,
  [investmentTablesAPI.reducerPath]: investmentTablesAPI.reducer,
  [fundIndicatorsAPI.reducerPath]: fundIndicatorsAPI.reducer,
  [reportingsAPI.reducerPath]: reportingsAPI.reducer,
  [optionsItemsReportingAPI.reducerPath]: optionsItemsReportingAPI.reducer,
});

// Создаём функцию setupStore, с помощью её мы будем конфигурировать
// наше редакс-хранилище. Без использования toolkit мы использовали
// createReducer. Сейчас используем configureStore().

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(newsAPI.middleware)
        .concat(aboutFundAPI.middleware)
        .concat(aboutFundCardsAPI.middleware)
        .concat(businessCardsAPI.middleware)
        .concat(cardsBusinessCarouselAPI.middleware)
        .concat(cardsBusinnesStatisticAPI.middleware)
        .concat(investmentCardsAPI.middleware)
        .concat(investmentOptionsAPI.middleware)
        .concat(investPercentAPI.middleware)
        .concat(investmentTablesAPI.middleware)
        .concat(fundIndicatorsAPI.middleware)
        .concat(reportingsAPI.middleware)
        .concat(optionsItemsReportingAPI.middleware),
  });
};

// Три базовых типа, которые нам в дальнейшей работе понадобятся:
// Нам необходимо получить тип нашего состояния:
export type RootState = ReturnType<typeof rootReducer>;

// Так же получим тип самого стора:
export type AppStore = ReturnType<typeof setupStore>;

// Так же получим тип dispatch нашего хранилища. Определив тип диспатча,
// мы не сможем задиспачить те экшены, которые мы не определили
export type AppDispatch = AppStore["dispatch"];
