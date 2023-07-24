"use strict";
exports.__esModule = true;
exports.fundIndicatorsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.fundIndicatorsAPI = react_1.createApi({
    reducerPath: "fundIndicatorsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (builder) { return ({
        getFundIndicators: builder.query({
            query: function () { return ({
                url: "fundIndicators"
            }); }
        })
    }); }
});
//  регистрируем в store/store.ts
