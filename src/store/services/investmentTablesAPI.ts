import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IExpandingTable } from "../../models/types";

export const investmentTablesAPI = createApi({
  reducerPath: "investmentTablesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getInvestmentTables: builder.query<IExpandingTable[][], void>({
      query: () => ({
        url: "investmentTables",
      }),
    }),
  }),
});

//  регистрируем в store/store.ts
