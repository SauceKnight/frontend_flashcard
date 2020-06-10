import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { getAllCards } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";

function ShowCards(props) {
	const cards = useSelector((state) => state.Cards);
	const { id } = props.match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCards(id));
	}, [id]);

	if (!cards) {
		return null;
	}

	console.log("TEST FOR CARDS", cards);
	return (
		<div>
			{Object.values(cards).map((card) => (
				<li>
					<p className="center">{card.question}</p>
					<p className="center">{card.answer}</p>
				</li>
			))}
		</div>
	);
}

export default ShowCards;
