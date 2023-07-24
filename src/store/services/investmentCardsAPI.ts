import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICard } from "../../models/types";

export const investmentCardsAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (buider) => ({
    getInvestmentCards: buider.query<ICard[], void>({
      query: () => ({
        url: "investmentCards",
      }),
    }),
  }),
});

//  регистрируем в store/store.ts
