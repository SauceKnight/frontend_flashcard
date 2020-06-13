import React from "react";
import ShowCards from "./cards";
import PermanentLeftDrawer from "./sidebar";
import { Route, Switch } from "react-router-dom";
import DeckHeader from "./deckHeader";
import CardViewer from "./cardViewer";
import SearchedDeckResults from "./SearchedDecksResult";

function LoggedIn() {
	return (
		// TODO: render sidebar here from components/sidebar (?)
		<div>
			<Route path="/" component={PermanentLeftDrawer} />
			<Route path="/cards/:id" component={DeckHeader} />

			<Switch>
				<Route
					exact
					path="/search/:decktitle"
					component={SearchedDeckResults}
				/>
				<Route exact path="/cards/:id/study" component={ShowCards} />
				<Route exact path="/cards/:id/quiz" component={CardViewer} />
				{/* <Route exact path="/signup" component={SignupPanel} />
				<Route path ="/" component={PermanentLeftDrawer} /> */}
			</Switch>
		</div>
	);
}

export default LoggedIn;
