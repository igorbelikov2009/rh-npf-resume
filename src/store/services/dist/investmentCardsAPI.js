"use strict";
exports.__esModule = true;
exports.investmentCardsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.investmentCardsAPI = react_1.createApi({
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (buider) { return ({
        getInvestmentCards: buider.query({
            query: function () { return ({
                url: "investmentCards"
            }); }
        })
    }); }
});
//  регистрируем в store/store.ts
