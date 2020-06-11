
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
// import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

let store;

if (localStorage["flashnerd/authentication/TOKEN"]) {
  const decodedUser = jwt_decode(localStorage["flashnerd/authentication/TOKEN"])
  const preState = { User: decodedUser, Deck: decodedUser.decks }
  console.log(decodedUser)
  store = configureStore(preState)
}
else {
  store = configureStore();
}

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain={config.domain}
          client_id={config.clientId}
          redirect_uri={window.location.origin}
          onRedirectCallback={onRedirectCallback}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
