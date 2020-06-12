import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { getAllCards } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../index.css";

import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		marginTop: "100px",
		marginLeft: "480px",
		width: "700px",
		height: "400px",
		borderRadius: "20px",
		cursor: "pointer",
		backgroundColor: "#ffb74d",
		background: theme.gradientBackground,
	},

	pos: {
		marginBottom: 12,
	},
	header: {
		marginTop: "20px",
		marginBottom: "20px",
		fontSize: "20px",
		color: "white",
	},
	bodyText: {
		fontSize: "30px",
		color: "orange",
	},
	editCardButton: {
		borderRadius: "20px",
		color: "#616161",
		backgroundColor: "#ffe0b2",
		width: "120px",
		marginTop: "30px",
		// marginLeft: "30px",
		marginLeft: 30,
	},
	buttons: {
		marginLeft: "480px",
	},
	colorStyle: {
		backgroundColor: "linear-gradient(to top, #ffb74d, transparent)",
	},
}));

function toggler(event) {
	event.currentTarget.classList.toggle("is-flipped");
}

export default function CardViewer(props) {
	const classes = useStyles();
	const cards = useSelector((state) => state.Cards);
	const { id } = props.match.params;
	const dispatch = useDispatch();
	let [currentCard, setCurrentCard] = useState(0);
	useEffect(() => {
		dispatch(getAllCards(id));
	}, [id]);

	if (!cards) {
		return null;
	}

	function updateNextCurrentCard(e) {
		e.stopPropagation();
		if (currentCard == newCards.length - 1) {
			return setCurrentCard(0);
		}
		return setCurrentCard(currentCard + 1);
	}

	function updatePreviousCurrentCard(e) {
		e.stopPropagation();
		if (currentCard == 0) {
			return setCurrentCard(newCards.length - 1);
		}
		return setCurrentCard(currentCard - 1);
	}

	console.log("TEST FOR CARDs", cards);
	let newCards = Object.values(cards);
	console.log("newCards", newCards);

	if (!newCards.length) {
		return null;
	}

	return (
		<>
			<div className="cardViewer_scene scene--card">
				<div className="card" onClick={(event) => toggler(event)}>
					<div>
						<div className="card__face card__face--front">
							<Card className={classes.root}>
								<CardContent>
									<Typography
										className={classes.header}
										variant="h5"
										component="h2"
									>
										Your today's flashcard
									</Typography>
									<Typography
										variant="body2"
										className={classes.bodyText}
										component="p"
									>
										{newCards[currentCard].question}
										<br />
									</Typography>
								</CardContent>
							</Card>
						</div>
						<div className="card__face card__face--back">
							<Card className={classes.root}>
								<CardContent>
									<Typography
										className={classes.header}
										variant="h5"
										component="h2"
									>
										Answer
									</Typography>
									<Typography
										variant="body2"
										className={classes.bodyText}
										component="p"
									>
										{newCards[currentCard].answer}
										<br />
									</Typography>
								</CardContent>
								<div className="cardViewer_buttons"></div>
							</Card>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className={classes.buttons}>
					<Button
						size="small"
						className={classes.editCardButton}
						onClick={updatePreviousCurrentCard}
					>
						Previous
					</Button>
					<Button size="small" className={classes.editCardButton}>
						Completed
					</Button>
					<Button
						size="small"
						className={classes.editCardButton}
						onClick={updateNextCurrentCard}
					>
						Next
					</Button>
				</div>
			</div>
		</>
	);
}
