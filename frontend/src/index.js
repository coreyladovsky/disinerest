import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { createStore, applyMiddleware } from "redux";
// import RootReducer from "./reducers/RootReducer";
import { reducer } from "./reducers/RootReducer";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import { Provider } from "react-redux";
const middleware = [...getDefaultMiddleware(), logger]

// let store = createStore(RootReducer, {}, applyMiddleware(thunk, logger));
let store = configureStore({
  reducer, 
  middleware
});




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
