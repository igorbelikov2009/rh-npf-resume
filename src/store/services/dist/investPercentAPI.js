"use strict";
exports.__esModule = true;
exports.investPercentAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.investPercentAPI = react_1.createApi({
    reducerPath: "investPercentAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (builder) { return ({
        getInvestPercent: builder.query({
            query: function () { return ({
                url: "investPercents"
            }); }
        })
    }); }
});
//  регистрируем в store/store.ts
