import { FETCH_SEARCH_DECKS, SEARCH_DECKS_BY_TITLE } from "./deckActions";

import { SET_TOKEN } from "../reducers/authentication";

const initialState = {
	foundDecks: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SEARCH_DECKS:
			return {
				...state,
				...action.payload.data,
			};
		case SET_TOKEN:
			return {
				...state,
				...action.payload.decks,
			};
		case SEARCH_DECKS_BY_TITLE:
			return {
				...state,
				foundDecks: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
