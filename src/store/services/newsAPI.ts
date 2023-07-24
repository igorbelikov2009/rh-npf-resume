import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INews } from "../../models/types";

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["News"],
  endpoints: (build) => ({
    fetchNews: build.query<INews[], void>({
      query: () => ({
        url: "/news",
      }),
      providesTags: (result) => ["News"], // указываем, что эндпоинт fetchNews
      // работает с тэгом ["News"]
    }),
    addNews: build.mutation({
      query: (body: INews) => ({
        url: "/news",
        method: "POST",
        body,
      }),
      invalidatesTags: ["News"], // прежние данные делаем неактуальными при
      // помощи этого тэга и происходит автоматическое обновление браузера
      // при выполнении мутации.
    }),
    deleteNews: build.mutation({
      query: (id) => ({
        url: `news/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["News"], // прежние данные делаем неактуальными при
      // помощи этого тэга и происходит автоматическое обновление браузера
      // при выполнении мутации.
    }),
  }),
});

export const { useFetchNewsQuery, useAddNewsMutation, useDeleteNewsMutation } = newsAPI;
//  регистрируем в store/store.ts
