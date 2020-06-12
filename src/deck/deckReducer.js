import { FAVORITE_DECK, FETCH_USER_DECKS, FETCH_CURRENT_DECK, FETCH_SEARCH_DECKS, SEARCH_DECKS_BY_TITLE, CREATE_NEW_DECK } from "./deckActions";

import { SET_TOKEN } from "../reducers/authentication";

const initialState = {
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_DECKS:
            return {
                ...state,
                ...action.payload.data,
            };
        case FETCH_USER_DECKS:
            return {
                ...state,
                ...action.payload.decks,
            };
        case SET_TOKEN:
            return {
                ...state,
                ...action.payload.decks,
            };
        case FETCH_CURRENT_DECK:
            return {
                ...state,
                ...action.payload,
            };
        case SEARCH_DECKS_BY_TITLE:
            return {
                ...state,
                foundDecks: action.payload,
            };
        case CREATE_NEW_DECK:
            return {
                ...state,
                ...action.payload.data,
            };
        case FAVORITE_DECK:
            return {
                ...state,
                ...action.payload.decks,
            };

        default:
            return state;
    }
};

export default reducer;
