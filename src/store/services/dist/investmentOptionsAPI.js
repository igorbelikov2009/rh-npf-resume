"use strict";
exports.__esModule = true;
exports.investmentOptionsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.investmentOptionsAPI = react_1.createApi({
    reducerPath: "investmentOptionsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (builder) { return ({
        getInvestmentOptions: builder.query({
            query: function () { return ({
                url: "investmentOptions"
            }); }
        })
    }); }
});
//  регистрируем в store/store.ts
