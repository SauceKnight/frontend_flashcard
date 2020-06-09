import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import ListofDecks from "./components/ListofDecks";
import LoginPanel from "./components/login";
import SignupPanel from "./components/signupPanel";
import Profile from "./components/userProfile";
import PermanentLeftDrawer from "./components/sidebar";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		// TODO: render sidebar here from components/sidebar (?)
		<div>
			<Switch>
				<Route exact path="/profile/:id" component={Profile} />
				<Route exact path="/login" component={LoginPanel} />
				{/* <ListofDecks /> */}
				<Route exact path="/signup" component={SignupPanel} />
				<PermanentLeftDrawer />
			</Switch>
		</div>
	);
}

export default App;
