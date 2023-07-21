import React, { useEffect, useState } from "react";
import "./styles/app.scss";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setAuth] = useState<boolean>(false);
  const [isBackgroundWhite, setBackgroundWhite] = useState(false);
  const [isAdminLoginVisible, setAdminLoginVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth-renaissance")) {
      setAuth(true);
    }
  }, []);

  return (
    <div className="app">
      <AuthContext.Provider
        value={{
          isAuth,
          setAuth,
          isBackgroundWhite,
          setBackgroundWhite,
          isAdminLoginVisible,
          setAdminLoginVisible,
        }}
      >
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;

/*
У нас есть useEffect в App.tsx, который автоматически записывает setAuth(true)
при условии, если хотя бы раз логинился в CallBack.tsx 
  useEffect(() => {
    if (localStorage.getItem("auth-renaissance")) {
      setAuth(true);
    }
  }, []);
*/
