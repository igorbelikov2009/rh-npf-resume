"use strict";
exports.__esModule = true;
exports.useDeleteNewsMutation = exports.useAddNewsMutation = exports.useFetchNewsQuery = exports.newsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.newsAPI = react_1.createApi({
    reducerPath: "newsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    tagTypes: ["News"],
    endpoints: function (build) { return ({
        fetchNews: build.query({
            query: function () { return ({
                url: "/news"
            }); },
            providesTags: function (result) { return ["News"]; }
        }),
        addNews: build.mutation({
            query: function (body) { return ({
                url: "/news",
                method: "POST",
                body: body
            }); },
            invalidatesTags: ["News"]
        }),
        deleteNews: build.mutation({
            query: function (id) { return ({
                url: "news/" + id,
                method: "DELETE"
            }); },
            invalidatesTags: ["News"]
        })
    }); }
});
exports.useFetchNewsQuery = exports.newsAPI.useFetchNewsQuery, exports.useAddNewsMutation = exports.newsAPI.useAddNewsMutation, exports.useDeleteNewsMutation = exports.newsAPI.useDeleteNewsMutation;
//  регистрируем в store/store.ts
