import {
    FETCH_SEARCH_DECKS,
} from './deckActions'

import { SET_TOKEN } from '../reducers/authentication'

const initialState = {
    decks: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_DECKS:
            return {
                ...state,
                decks: action.payload.data,
            }
        case SET_TOKEN:
            return {
                ...state,
                decks: action.payload.decks,
            }

        default: return state
    }
}

export default reducer