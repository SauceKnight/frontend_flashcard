import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { getAllCards } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../index.css";
import ReactCardFlip from 'react-card-flip'
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
	bodyText: {
		fontSize: "30px",
		// color: "orange",
		textAlign: "center",
		textJustify: "center"
	},
	editCardButton: {
		borderRadius: "20px",
		color: "#FFFFFF",
		backgroundColor: "#5680E9",
		width: "120px",
		// marginTop: "60px",
		// marginLeft: "30px",
		// marginLeft: 180,
		"&:hover": {
			backgroundColor: "#5680E9",
		}
	},
	buttons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly"
	},
	card: {
		// minWidth: 400,
		// minHeight: 400,
		// maxHeight: 450,
		// maxWidth: 450,
		// paddingLeft: 200
		// marginLeft: 240,
		// marginRight: 240,
		height: 200
	},
	cardDiv: {
		marginTop: "20px"
	},
	buttonDiv: {
		marginTop: "20px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly"
	},
	quizView: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		marginRight: "30%",
		marginLeft: "30%",


	},
	test: {
		marginLeft: 240,


	},
}));

export default function CardViewer(props) {
	const classes = useStyles();
	const cards = useSelector((state) => state.Cards);
	const { id } = props.match.params;
	const dispatch = useDispatch();
	let [currentCard, setCurrentCard] = useState(0);
	let [isFlipped, setIsFlipped] = useState(false);

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

	function handleClick(e) {
		return setIsFlipped(!isFlipped)
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
				<div className={classes.buttonDiv} >
					<Button
						size="small"
						className={classes.editCardButton}
						onClick={updatePreviousCurrentCard}
					>
						<SkipPreviousIcon />
						Previous
					</Button>
					<Button
						size="small"
						className={classes.editCardButton}
						onClick={updateNextCurrentCard}
					>

						Next
						<SkipNextIcon />
					</Button>
				</div>
				<div className={classes.cardDiv}>
					<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
						<Card onClick={handleClick} >
							<Typography
								variant="body2"
								className={classes.bodyText}
								component="p"
							>
								{newCards[currentCard].question}
							</Typography>

						</Card>

						<Card onClick={handleClick} >
							<Typography
								variant="body2"
								className={classes.bodyText}
								component="p"
							>
								{newCards[currentCard].answer}
							</Typography>
						</Card>
					</ReactCardFlip>
				</div>
			</div>
		</ >
	);
}
