import {
    FETCH_SEARCH_DECKS,
    FAVORITE_DECKS
} from './deckActions'

const initialState = {
    decks: [],
    favoritedecks: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_DECKS:
            return {
                ...state,
                decks: action.payload.data,
            }
        case FAVORITE_DECKS:
            return {
                ...state,
                favoritedecks: action.payload.data,
            }
        default: return state
    }
}

export default reducer