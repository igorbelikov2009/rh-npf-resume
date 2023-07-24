import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICarouselCard } from "../../models/types";

export const cardsBusinessCarouselAPI = createApi({
  reducerPath: "cardsBusinessCarouselAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getCardsBusinessCarousel: builder.query<ICarouselCard[], void>({
      query: () => ({
        url: "cardsBusinessCarousel",
      }),
    }),
  }),
});

// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
