import React, { useState, useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { getDeckByTitle } from "../deck/deckActions";
import { useSelector, useDispatch } from "react-redux";

function DeckHeader(props) {
	const decks = useSelector((state) => state.Deck);
    console.log("my props", props);
	const id= props.location.pathname[]
	const dispatch = useDispatch();
	// const [searchContent, setSearchContent] = useState("");

	// useEffect(() => {
	// 	dispatch(getDeckByTitle(e.target.value));
	// }, []);

	// if (!foundDecks) {
	// 	return null;
	// }

	// return (
	// 	<div>
	// 		{foundDecks.map((foundDeck) => (
	// 			<h1>{foundDeck.title}</h1>
	// 		))}
	// 		<div>
	// 			<button> STUDY</button>
	// 			<button>FAVORITE</button>
	// 			<button>MODE</button>
	// 		</div>
	// 	</div>
	// );

	return <h1>MAIIIIII</h1>;
}

export default withRouter(DeckHeader);
