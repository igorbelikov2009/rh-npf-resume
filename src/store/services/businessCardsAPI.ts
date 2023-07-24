import { IBusinessCard } from "./../../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const businessCardsAPI = createApi({
  reducerPath: "businessCardsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getBusinessCardsAPI: builder.query<IBusinessCard[], void>({
      query: () => ({
        url: "businessCards",
      }),
    }),
  }),
});

// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
