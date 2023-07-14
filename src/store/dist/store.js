"use strict";
exports.__esModule = true;
exports.setupStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
var rootReducer = toolkit_1.combineReducers({});
// Создаём функцию setupStore, с помощью её мы будем конфигурировать
// наше редакс-хранилище. Без использования toolkit мы использовали
// createReducer. Сейчас используем configureStore().
exports.setupStore = function () {
    return toolkit_1.configureStore({
        reducer: rootReducer,
        middleware: function (getDefaultMiddleware) { return getDefaultMiddleware(); }
    });
};
