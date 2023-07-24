import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IOptionItem } from "../../models/types";

export const optionsItemsReportingAPI = createApi({
  reducerPath: "optionsItemsReportingAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),

  endpoints: (builder) => ({
    getOptionsItemsReporting: builder.query<IOptionItem[], void>({
      query: () => ({
        url: "optionsItemsReporting",
      }),
    }),
  }),
});

//  регистрируем в store/store.ts
