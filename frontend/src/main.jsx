import React from "react";
import ReactDOM from "react-dom/client";

import AppRoutes from "./AppRoutes";
import "./index.css";

import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  </Provider>
);
