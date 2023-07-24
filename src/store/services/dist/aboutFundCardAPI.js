"use strict";
exports.__esModule = true;
exports.aboutFundCardsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.aboutFundCardsAPI = react_1.createApi({
    reducerPath: "aboutFundCardsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (builder) { return ({
        getAboutFundCards: builder.query({
            query: function (limit) {
                if (limit === void 0) { limit = 20; }
                return ({
                    url: "aboutFundCards",
                    params: {
                        _limit: limit
                    }
                });
            }
        })
    }); }
});
// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
