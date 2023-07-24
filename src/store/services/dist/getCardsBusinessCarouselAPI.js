"use strict";
exports.__esModule = true;
exports.cardsBusinessCarouselAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.cardsBusinessCarouselAPI = react_1.createApi({
    reducerPath: "cardsBusinessCarouselAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (builder) { return ({
        getCardsBusinessCarousel: builder.query({
            query: function () { return ({
                url: "cardsBusinessCarousel"
            }); }
        })
    }); }
});
// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
