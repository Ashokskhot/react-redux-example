import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { appStore } from "./redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={appStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
