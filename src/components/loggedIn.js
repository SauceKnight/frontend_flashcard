import React from "react";
import ShowCards from "./cards";
import PermanentLeftDrawer from "./sidebar";
import { Route, Switch } from "react-router-dom";


function LoggedIn() {
    return (
        // TODO: render sidebar here from components/sidebar (?)
        <div>
            <PermanentLeftDrawer />
            <Switch>
                <Route exact path="/cards/:id" component={ShowCards} />
                {/* <Route exact path="/signup" component={SignupPanel} />
				<Route path ="/" component={PermanentLeftDrawer} /> */}
            </Switch>
        </div>
    );
}

export default LoggedIn;
