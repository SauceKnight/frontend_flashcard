import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { getOneCard } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";

function ShowOneCard(props) {
	const currentCard = useSelector((state) => state.Cards.currentCard);
	const { deckId, cardId } = props.match.params;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getOneCard(deckId, cardId));
	}, []);

	if (!currentCard) {
		return null;
	}

	console.log("TEST FOR CURRENTCARD", currentCard);
	return (
		<div>
			<h1> You got this card!</h1>
			<div className="maincontainer">
				<div className="thecard">
					<div className="thefront">
						<span>{currentCard.question}</span>
					</div>
					<div className="theback">
						<span>{currentCard.answer}</span>
					</div>
				</div>
				<button>Next Question</button>
			</div>
		</div>
	);
}

export default ShowOneCard;
