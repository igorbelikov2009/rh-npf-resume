import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import "./styles/reset.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";

// создаём пропс {store} для store={store}
const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
