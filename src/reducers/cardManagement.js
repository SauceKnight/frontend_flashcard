export const FETCH_CURRENT_CARD = "FECTH_CURRENT_CARD";
export const FETCH_ALL_CARDS = "FECTH_ALL_CARDS";
export const COMPLETED_CARD = "COMPLETED_CARD";

export const fetchAllCards = (cards) => {
	return {
		type: FETCH_ALL_CARDS,
		cards,
	};
};

export const fetchCurrentCard = (currentCard) => ({
	type: FETCH_CURRENT_CARD,
	currentCard,
});

//FETCH ALL CARDS
export const getAllCards = (id) => async (dispatch) => {
	const response = await fetch(`http://localhost:5000/cards/${id}`);
	if (response.ok) {
		const res = await response.json();
		console.log("TEST FOR RES", res.data);
		dispatch(fetchAllCards(res.data));
	}
};
////FETCH SINGLER CARD
export const getOneCard = (deckId, cardId) => async (dispatch) => {
	const response = await fetch(
		`http://localhost:5000/cards/${deckId}/${cardId}`
	);
	if (response.ok) {
		const res = await response.json();
		dispatch(fetchCurrentCard(res.data));
	}
};

const initialState = {

};
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_ALL_CARDS:
			return {
				...action.cards,
			};
		case FETCH_CURRENT_CARD:
			return {
				...state,
				currentCard: action.currentCard,
			};
		default:
			return state;
	}
}
