"use strict";
exports.__esModule = true;
exports.AuthContext = void 0;
var react_1 = require("react");
exports.AuthContext = react_1.createContext({
    isBackgroundWhite: false,
    setBackgroundWhite: function () { },
    isAuth: false,
    setAuth: function () { },
    isAdminLoginVisible: false,
    setAdminLoginVisible: function () { }
});
/*
У нас есть useEffect в App.tsx, который автоматически записывает setAuth(true)
при условии, если хотя бы раз логинился в CallBack.tsx
  useEffect(() => {
    if (localStorage.getItem("auth-renaissance")) {
      setAuth(true);
    }
  }, []);
*/
