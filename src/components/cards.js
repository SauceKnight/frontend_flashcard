import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { getAllCards } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";

function ShowCards(props) {
	const cards = useSelector((state) => state.Cards.cards);
	const { id } = props.match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCards(id));
	}, []);

	if (!cards) {
		return null;
	}

	console.log("TEST FOR CARDS", cards);
	return (
		<div>
			{cards.map((card) => (
				<li>
					<p>{card.question}</p>
					<p>{card.answer}</p>
				</li>
			))}
		</div>
	);
}

export default ShowCards;
