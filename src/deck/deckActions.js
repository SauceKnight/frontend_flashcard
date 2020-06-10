export const FETCH_SEARCH_DECKS = "FECTH_SEARCH_DECKS"


export const fetchSearchDecks = decks => {
    return {
        type: FETCH_SEARCH_DECKS,
        payload: decks
    }
}


export const fetchDecks = (userid) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/user/${userid}/decks`);
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchSearchDecks(res));
    }
};
