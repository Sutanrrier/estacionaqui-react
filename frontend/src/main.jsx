import React from "react";
import ReactDOM from "react-dom";

import AppRoutes from "./AppRoutes";
import "./main.css";
import store from "./store/store";
import { Provider } from "react-redux";

const rootNode = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  </Provider>,
  rootNode
);
