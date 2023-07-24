import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPercent } from "../../models/types";

export const investPercentAPI = createApi({
  reducerPath: "investPercentAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getInvestPercent: builder.query<IPercent[], void>({
      query: () => ({
        url: "investPercents",
      }),
    }),
  }),
});

//  регистрируем в store/store.ts
