"use strict";
exports.__esModule = true;
var locale = navigator.language; // автоматическое определение locale
// console.log(locale); // ru-RU - это locale
var dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
};
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
// Определяем UserDate как объект JS Intl.DateTimeFormat, который является
// конструктором объектов, включающих языка-зависимое форматирование даты и времени.
var UserDate = new Intl.DateTimeFormat(locale, dateOptions);
// const UserDate = new Intl.DateTimeFormat("ru-RU", dateOptions);
// То же самое, но locale определяем вручную.
exports["default"] = UserDate;
// Форматирование дат под локаль пользователя Михаил Непомнящий
// https://www.youtube.com/watch?v=Wh2zd2oZOmo&list=PLiZoB8JBsdzklPlprqQRwGQuyD92f-Wm8&index=4
