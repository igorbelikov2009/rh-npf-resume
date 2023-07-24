import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICard } from "../../models/types";

export const aboutFundCardsAPI = createApi({
  reducerPath: "aboutFundCardsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getAboutFundCards: builder.query<ICard[], number>({
      query: (limit: number = 20) => ({
        url: "aboutFundCards",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
