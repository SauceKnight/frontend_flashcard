import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import authentication from "../reducers/authentication";
import deckManagement from "../reducers/deckManagement";
import cardManagement from "../reducers/cardManagement";
import deckReducer from "../deck/deckReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	authentication,
	deckManagement,
	cardManagement,
	Deck: deckReducer,
});

const configureStore = (initialState) => {
	return createStore(
		reducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);
};

export default configureStore;
