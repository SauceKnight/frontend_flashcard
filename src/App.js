import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import ListofDecks from "./components/ListofDecks";
import LoginPanel from "./components/login";
import SignupPanel from "./components/signupPanel";
import PermanentLeftDrawer from './components/sidebar'

function App() {
  return (
    // TODO: render sidebar here from components/sidebar (?)
    <div>
      <Button variant="contained" color="primary">
        Hello World
			</Button>
      {/* <LoginPanel /> */}
      {/* <ListofDecks /> */}
      {/* <SignupPanel /> */}
      <PermanentLeftDrawer />
    </div>
  );
}

export default App;
