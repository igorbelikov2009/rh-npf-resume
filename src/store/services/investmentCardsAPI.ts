import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICard } from "../../models/types";

export const investmentCardsAPI = createApi({
  reducerPath: "investmentCardsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getInvestmentCards: builder.query<ICard[], void>({
      query: () => ({
        url: "investmentCards",
      }),
    }),
  }),
});
//  регистрируем в store/store.ts
