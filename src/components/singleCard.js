// import React, { useState, useEffect } from "react";
// // import { Redirect } from "react-router-dom";
// import { getOneCard } from "../reducers/cardManagement";
// import { useSelector, useDispatch } from "react-redux";
// import "../index.css";

// function ShowOneCard(props) {
// 	const currentCard = useSelector((state) => state.Cards.currentCard);
// 	const { deckId, cardId } = props.match.params;

// 	const dispatch = useDispatch();
// 	useEffect(() => {
// 		dispatch(getOneCard(deckId, cardId));
// 	}, []);

// 	if (!currentCard) {
// 		return null;
// 	}

// 	console.log("TEST FOR CURRENTCARD", currentCard);
// 	return (
// 		<div>
// 			<h1> You got this card!</h1>
// 			<div className="maincontainer">
// 				<div className="thecard">
// 					<div className="thefront">
// 						<span>{currentCard.question}</span>
// 					</div>
// 					<div className="theback">
// 						<span>{currentCard.answer}</span>
// 					</div>
// 				</div>
// 				<button>Next Question</button>
// 			</div>
// 		</div>
// 	);
// }

// export default ShowOneCard;

import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getOneCard } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

function toggler(event) {
	event.currentTarget.classList.toggle("is-flipped");
	console.log(event.currentTarget);
}

function ShowOneCard(props) {
	const classes = useStyles();
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
	const bull = <span className={classes.bullet}>•</span>;
	return (
		<div className="cardViewer_scene scene--card">
			<div className="card" onClick={(event) => toggler(event)}>
				<div className="card__face card__face--front">
					<Card className={classes.root}>
						<CardContent>
							<Typography
								className={classes.title}
								color="textSecondary"
								gutterBottom
							></Typography>
							<Typography variant="h5" component="h2">
								Your today's flashcard
							</Typography>
							<Typography className={classes.pos} color="textSecondary" />
							<Typography variant="body2" component="p">
								{currentCard.question}
								<br />
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Edit Card</Button>
						</CardActions>
					</Card>
				</div>
				<div className="card__face card__face--back">
					<Card className={classes.root}>
						<CardContent>
							<Typography
								className={classes.title}
								color="textSecondary"
								gutterBottom
							></Typography>
							<Typography variant="h5" component="h2">
								Answer
							</Typography>
							<Typography className={classes.pos} color="textSecondary" />
							<Typography variant="body2" component="p">
								{currentCard.answer}
								<br />
							</Typography>
						</CardContent>
						<div className="cardViewer_buttons">
							<CardActions>
								<Button size="small">Edit Card</Button>
							</CardActions>
							<CardActions>
								<Button size="small">Mark as Complete</Button>
							</CardActions>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default ShowOneCard;
