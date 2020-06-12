import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
// import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from 'jwt-decode'

let store;

if (localStorage["flashnerd/authentication/TOKEN"]) {
  const decodedUser = jwt_decode(localStorage["flashnerd/authentication/TOKEN"])
  delete decodedUser["decks"]
  delete decodedUser["favoritedecks"]
  const preState = { User: decodedUser }
  store = configureStore(preState)
}
else {
  store = configureStore();
}



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
