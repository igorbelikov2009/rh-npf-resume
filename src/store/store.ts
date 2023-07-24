import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/newsReducer";
import { aboutFundAPI } from "./services/aboutFundAPI";
import { aboutFundCardsAPI } from "./services/aboutFundCardAPI";
import { businessCardsAPI } from "./services/businessCardsAPI";
import { cardsBusinessCarouselAPI } from "./services/getCardsBusinessCarouselAPI";
import { cardsBusinnesStatisticAPI } from "./services/getCardsBusinnesStatisticAPI";

import { newsAPI } from "./services/newsAPI";

// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
const rootReducer = combineReducers({
  newsReducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
  [aboutFundAPI.reducerPath]: aboutFundAPI.reducer,
  [aboutFundCardsAPI.reducerPath]: aboutFundCardsAPI.reducer,
  [businessCardsAPI.reducerPath]: businessCardsAPI.reducer,
  [cardsBusinessCarouselAPI.reducerPath]: cardsBusinessCarouselAPI.reducer,
  [cardsBusinnesStatisticAPI.reducerPath]: cardsBusinnesStatisticAPI.reducer,
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
        .concat(cardsBusinnesStatisticAPI.middleware),
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
