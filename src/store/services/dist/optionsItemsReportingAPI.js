"use strict";
exports.__esModule = true;
exports.optionsItemsReportingAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.optionsItemsReportingAPI = react_1.createApi({
    reducerPath: "optionsItemsReportingAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (builder) { return ({
        getOptionsItemsReporting: builder.query({
            query: function () { return ({
                url: "optionsItemsReporting"
            }); }
        })
    }); }
});
//  регистрируем в store/store.ts
