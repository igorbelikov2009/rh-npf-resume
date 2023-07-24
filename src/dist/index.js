"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./styles/index.scss");
require("./styles/reset.css");
var App_1 = require("./App");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("./store/store");
var react_redux_1 = require("react-redux");
// создаём пропс {store} для store={store}
var store = store_1.setupStore();
var root = client_1["default"].createRoot(document.getElementById("root"));
root.render(react_1["default"].createElement(react_redux_1.Provider, { store: store },
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_1["default"].StrictMode, null,
            react_1["default"].createElement(App_1["default"], null)))));
