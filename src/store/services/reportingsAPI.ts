import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IReport } from "../../models/types";

export const reportingsAPI = createApi({
  reducerPath: "reportingsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getReportings: builder.query<IReport[][], void>({
      query: () => ({
        url: "reportings",
      }),
    }),
  }),
});

//  регистрируем в store/store.ts
