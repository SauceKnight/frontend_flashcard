export const FETCH_SEARCH_DECKS = "FECTH_SEARCH_DECKS";
export const SEARCH_DECKS_BY_TITLE = "SEARCH_DECKS_BY_TITLE";
export const CREATE_NEW_DECK = "CREATE_NEW_DECK";
export const FETCH_USER_DECKS = "FETCH_USER_DECKS";
export const FETCH_CURRENT_DECK = "FETCH_CURRENT_DECK"
export const FAVORITE_DECK = "FAVORITE_DECK"
export const DELETE_FAVORITE_DECK = "DELETE_FAVORITE_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const EDIT_DECK = "EDIT_DECK";

export const fetchSearchDecks = (decks) => {
    return {
        type: FETCH_SEARCH_DECKS,
        payload: decks,
    };
};

export const fetchCurrentDeck = (decks) => {
    return {
        type: FETCH_CURRENT_DECK,
        payload: decks,
    };
};

export const fetchUserDecks = (decks) => {
    return {
        type: FETCH_USER_DECKS,
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

export const deleteDeck = (payload) => ({
    type: DELETE_DECK,
    payload,
});

export const favoriteNewDeck = (payload) => ({
    type: FAVORITE_DECK,
    payload,
});

export const deleteFavDeck = (payload) => ({
    type: DELETE_FAVORITE_DECK,
    payload,
});

export const editDeck = (payload) => ({
    type: EDIT_DECK,
    payload,
});

export const fetchDecks = (userid) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/user/${userid}/decks`);
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchSearchDecks(res));
    }
};

export const getOneDeck = (userid, deckid) => async (dispatch) => {
    const response = await fetch(
        `http://localhost:5000/user/${userid}/deck/${deckid}`
    );
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchCurrentDeck(res.data));
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

export const addFavorite = (user_id, deck_id) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/${user_id}/${deck_id}/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, deck_id }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(favoriteNewDeck(res));
    }
};

export const deleteFavorite = (user_id, deck_id) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/${user_id}/${deck_id}/favoritedelete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, deck_id }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(deleteFavDeck(res));
    }
};

export const deleteSpecificDeck = (user_id, deck_id) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/user/${user_id}/${deck_id}/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, deck_id }),
    });
    if (response.ok) {
        const res = await response.json();
        console.log(res)
        dispatch(deleteDeck(res));
    }
};

export const loggedInDecks = (user_id) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/user/${user_id}/decks`);
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchUserDecks(res));
    }
};

export const EditCurrentDeck = (user_id, deckid, title, description) => async (
    dispatch
) => {
    const response = await fetch(`http://localhost:5000/user/${user_id}/deck/${deckid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(editDeck(res.data));
    }
};
