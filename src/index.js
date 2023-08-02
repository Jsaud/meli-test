import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ui/pages";
import reportWebVitals from "./reportWebVitals";

//Redux saga
import { Provider } from "react-redux";
import store from "./reducers/config"


import "./ui/assets/styles/global.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
