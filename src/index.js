import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routes";
import GlobalStyle from "./assets/style/globalStyle";
import { Provider } from "react-redux";
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Routers />
  </Provider>,
  document.getElementById("root")
);
