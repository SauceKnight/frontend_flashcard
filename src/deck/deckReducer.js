import {
    FETCH_SEARCH_DECKS,
} from './deckActions'

import { SET_TOKEN } from '../reducers/authentication'

const initialState = {
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_DECKS:
            return {
                ...state,
                ...action.payload.data,
            }
        case SET_TOKEN:
            return {
                ...state,
                ...action.payload.decks,
            }

        default: return state
    }
}

export default reducer