import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RoomPage } from "pages/RoomPage";

const NoMatch = () => <div>This page is not available</div>;

export const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/room" exact={true} component={RoomPage} />
			<Route component={NoMatch} />
		</Switch>
	</BrowserRouter>
);
