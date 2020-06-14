import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { getDeckByTitle } from "../deck/deckActions";
import { useSelector, useDispatch } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchDecks(props) {
	const foundDecks = useSelector((state) => state.Deck.foundDecks);
	const dispatch = useDispatch();

	const [searchContent, setSearchContent] = useState("");

	// useEffect(() => {}, [searchContent]);

	const updateSearch = (e) => {
		//e.preventDefault();
		setSearchContent(e.target.value);
		// dispatch(getDeckByTitle(e.target.value));
	};

	return (
		<>
			<Link to={`/search/${searchContent}`}>
				<SearchIcon />
			</Link>
			<DebounceInput
				minLength={2}
				debounceTimeout={300}
				onChange={updateSearch}
			/>
		</>
	);
}
