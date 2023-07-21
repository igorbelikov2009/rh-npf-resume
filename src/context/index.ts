import { createContext } from "react";

interface IAuthContext {
  isBackgroundWhite: boolean;
  setBackgroundWhite: React.Dispatch<React.SetStateAction<boolean>>;
  isAuth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isAdminLoginVisible: boolean;
  setAdminLoginVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({
  isBackgroundWhite: false,
  setBackgroundWhite: () => {},
  isAuth: false,
  setAuth: () => {},
  isAdminLoginVisible: false,
  setAdminLoginVisible: () => {},
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
