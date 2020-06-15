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
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		// marginTop: "100px",
		marginLeft: "80px",
		width: "700px",
		height: "400px",
		borderRadius: "20px",
		cursor: "pointer",
		backgroundColor: "#FFFFFF",
		background: theme.gradientBackground,

	},

	pos: {
		marginBottom: 12,
	},
	header: {
		marginTop: "20px",
		marginBottom: "20px",
		fontSize: "20px",
		color: "black",
	},
	bodyText: {
		fontSize: "30px",
		// color: "orange",
	},
	editCardButton: {
		borderRadius: "20px",
		color: "#FFFFFF",
		backgroundColor: "#5680E9",
		width: "120px",
		marginTop: "60px",
		// marginLeft: "30px",
		marginLeft: 180,
		"&:hover": {
			backgroundColor: "#5680E9",
		}
	},
	buttons: {
		// display: "flex",
		// flexDirection: "row",
		// justifyContent: "space-evenly"
	},
	quizView: {
		display: "flex",
		flexDirection: "row",
		// alignItems: "space-evenly",
		justifyContent: "space-evenly",
		marginLeft: 160,
		marginTop: 200
	},
	next: {
		display: "flex",
		flexDirection: "row",
		// alignItems: "space-evenly",
		justifyContent: "flex-start",
		alignItems: "flex-start"

	},
	colorStyle: {
		// backgroundColor: "linear-gradient(to top, #ffb74d, transparent)",
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
			<div className={classes.quizView}>
				<div className={classes.buttons}>
					<Button
						size="small"
						className={classes.editCardButton}
						onClick={updatePreviousCurrentCard}
					>
						<SkipPreviousIcon />
						Previous
					</Button>
				</div>
				<div  >
					<div className="card" onClick={(event) => toggler(event)}>
						<div >
							<div className="card__face card__face--front">
								<Card className={classes.root}>
									<CardContent>
										<Typography
											className={classes.header}
											variant="h5"
											component="h2"
										>
											Question
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
				<div className={classes.next}>
					<div className={classes.buttons}>
						<Button
							size="small"
							className={classes.editCardButton}
							onClick={updateNextCurrentCard}
						>

							Next
						<SkipNextIcon />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
