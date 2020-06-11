import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getDeckByTitle } from "../deck/deckActions";
import { useSelector, useDispatch } from "react-redux";
import { DebounceInput } from "react-debounce-input";

export default function SearchDecks(props) {
	const foundDecks = useSelector((state) => state.Deck.foundDecks);
	const dispatch = useDispatch();

	const [searchContent, setSearchContent] = useState("");

	// useEffect(() => {}, [searchContent]);

	const updateSearch = (e) => {
		// setSearchContent(e.target.value);
		dispatch(getDeckByTitle(e.target.value));
	};

	if (!foundDecks) {
		return null;
	}

	return (
		<div>
			<ul>
				{foundDecks.map((foundDeck) => (
					<li>{foundDeck.title}</li>
				))}
			</ul>
			<DebounceInput
				minLength={2}
				debounceTimeout={300}
				onChange={updateSearch}
			/>
		</div>
	);
}
