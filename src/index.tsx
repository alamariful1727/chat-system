import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";
import { store } from "Store";
import { TokenUrl, UserId, InstanceLocator } from "config";

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./index.css";
import "./style.css";

const {
	ChatkitProvider,
	TokenProvider
} = require("@pusher/chatkit-client-react");

const tokenProvider = new TokenProvider({
	url: TokenUrl
});

ReactDOM.render(
	<Provider store={store}>
		{UserId ? (
			<ChatkitProvider
				instanceLocator={InstanceLocator}
				tokenProvider={tokenProvider}
				userId={UserId}
			>
				<App />
			</ChatkitProvider>
		) : (
			<App />
		)}
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
