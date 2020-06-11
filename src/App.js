import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import ListofDecks from "./components/ListofDecks";
import LoginPanel from "./components/login";
import LoggedIn from "./components/loggedIn";
import SignupPanel from "./components/signupPanel";
// import Profile from "./components/userProfile";
import ShowCards from "./components/cards";
import ShowOneCard from "./components/singleCard";
import PermanentLeftDrawer from "./components/sidebar";
import SearchDecks from "./components/searchDeck";
import Cards from "./components/cards";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
	// <div>
	// 	<Switch>
	// 		<Route exact path="/search" component={SearchDecks} />
	// 		{/* <Route exact path="/cards/:deckId?/:cardId?" component={ShowOneCard} /> */}
	// 		{/* <Route exact path="/cards/:id" component={ShowCards} /> */}
	// 		{/* <Route exact path="/profile/:id" component={Profile} /> */}
	// 		{/* <Route exact path="/login" component={LoginPanel} /> */}
	// 		{/* <ListofDecks /> */}
	// 		{/* <Route exact path="/signup" component={SignupPanel} /> */}
	// 		<Route path="/" component={LoggedIn} />
	// 	</Switch>
	// </div>
  );
}

export default App;
