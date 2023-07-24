import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICard } from "../../models/types";

export const cardsBusinnesStatisticAPI = createApi({
  reducerPath: "cardsBusinnesStatisticAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getcardsBusinnesStatistic: builder.query<ICard[], void>({
      query: () => ({
        url: "cardsBusinnesStatistic",
      }),
    }),
  }),
});

// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
