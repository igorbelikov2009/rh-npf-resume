"use strict";
exports.__esModule = true;
exports.reportingsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.reportingsAPI = react_1.createApi({
    reducerPath: "reportingsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (builder) { return ({
        getReportings: builder.query({
            query: function () { return ({
                url: "reportings"
            }); }
        })
    }); }
});
//  регистрируем в store/store.ts
