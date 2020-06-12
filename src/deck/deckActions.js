export const FETCH_SEARCH_DECKS = "FECTH_SEARCH_DECKS";
export const SEARCH_DECKS_BY_TITLE = "SEARCH_DECKS_BY_TITLE";
export const CREATE_NEW_DECK = "CREATE_NEW_DECK";


export const fetchSearchDecks = (decks) => {
    return {
        type: FETCH_SEARCH_DECKS,
        payload: decks,
    };
};

// search deck by title

export const fetchDeckByTitle = (payload) => ({
    type: SEARCH_DECKS_BY_TITLE,
    payload,
});

export const createDeck = (payload) => ({
    type: CREATE_NEW_DECK,
    payload,
});

export const fetchDecks = (userid) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/user/${userid}/decks`);
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchSearchDecks(res));
    }
};

export const getDeckByTitle = (searchTerm) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/search/decks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchTerm }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchDeckByTitle(res.data));
    }
};

export const newDeck = (user_id, title, description) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/user/${user_id}/new_deck`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, title, description }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(createDeck(res));
    }
};
