import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IIndicatorsYear } from "../../models/types";

export const fundIndicatorsAPI = createApi({
  reducerPath: "fundIndicatorsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getFundIndicators: builder.query<IIndicatorsYear[], void>({
      query: () => ({
        url: "fundIndicators",
      }),
    }),
  }),
});

//  регистрируем в store/store.ts
