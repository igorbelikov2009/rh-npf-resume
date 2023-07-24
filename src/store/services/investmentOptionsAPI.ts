import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IOptionItem } from "../../models/types";

export const investmentOptionsAPI = createApi({
  reducerPath: "investmentOptionsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getInvestmentOptions: builder.query<IOptionItem[], void>({
      query: () => ({
        url: "investmentOptions",
      }),
    }),
  }),
});

//  регистрируем в store/store.ts
