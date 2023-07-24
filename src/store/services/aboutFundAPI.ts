import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IColumn } from "../../models/types";

export const aboutFundAPI = createApi({
  reducerPath: "aboutFundAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getAboutFundColumns: builder.query<IColumn[], number>({
      query: (limit: number = 10) => ({
        url: "/aboutFundColumns",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetAboutFundColumnsQuery } = aboutFundAPI;
//  регистрируем в store/store.ts
