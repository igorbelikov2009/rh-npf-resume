"use strict";
exports.__esModule = true;
exports.useGetAboutFundColumnsQuery = exports.aboutFundAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.aboutFundAPI = react_1.createApi({
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (builder) { return ({
        getAboutFundColumns: builder.query({
            query: function (limit) {
                if (limit === void 0) { limit = 10; }
                return ({
                    url: "/aboutFundColumns",
                    params: {
                        _limit: limit
                    }
                });
            }
        })
    }); }
});
exports.useGetAboutFundColumnsQuery = exports.aboutFundAPI.useGetAboutFundColumnsQuery;
//  регистрируем в store/store.ts
