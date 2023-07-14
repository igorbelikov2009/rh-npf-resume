"use strict";
exports.__esModule = true;
exports.useAppSelector = exports.useAppDispatch = void 0;
var react_redux_1 = require("react-redux");
// которые мы получали в файле store.ts
// По сути, это обычный useDispatch, который мы возвращаем, но здесь у нас происходит
// типизация. Будем использовать типизированный диспатч.
exports.useAppDispatch = function () { return react_redux_1.useDispatch(); };
// Аналогично, это будет хук useSelector, но типизированный. Для этого используем
// специальный тип TypedUseSelectorHook, и туда передаём RootState, который мы получали
// в файле store.ts
exports.useAppSelector = react_redux_1.useSelector;
