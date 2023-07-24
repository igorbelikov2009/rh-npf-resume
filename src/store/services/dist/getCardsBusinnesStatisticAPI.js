"use strict";
exports.__esModule = true;
exports.cardsBusinnesStatisticAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.cardsBusinnesStatisticAPI = react_1.createApi({
    reducerPath: "cardsBusinnesStatisticAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (builder) { return ({
        getcardsBusinnesStatistic: builder.query({
            query: function () { return ({
                url: "cardsBusinnesStatistic"
            }); }
        })
    }); }
});
// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
