import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ui/pages";
import reportWebVitals from "./reportWebVitals";

//Redux saga
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/";
import rootSaga from "./services";

import "./ui/assets/styles/global.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Crear el middleware de Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Crear el store de Redux
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Ejecuta el rootSaga
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
