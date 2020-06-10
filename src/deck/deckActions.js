export const FETCH_SEARCH_DECKS = "FECTH_SEARCH_DECKS";
export const SEARCH_DECKS_BY_TITLE = "SEARCH_DECKS_BY_TITLE";

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
		console.log("TEST#", res.data);
		dispatch(fetchDeckByTitle(res.data));
	}
};
