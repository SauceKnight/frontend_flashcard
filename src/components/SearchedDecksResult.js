import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { getAllCards } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getDeckByTitle } from "../deck/deckActions";
// import "../index.css";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth + 5,
		paddingRight: 10,
	},
	paper: {
		padding: theme.spacing(5),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	study: {
		paddingTop: theme.spacing(5),
		textAlign: "center",
		color: "black",
	},
}));

export default function SearchedDeckResults(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const foundDecks = useSelector((state) => state.Deck.foundDecks);
	const { decktitle } = props.match.params;
	useEffect(() => {
		dispatch(getDeckByTitle(decktitle));
	}, [decktitle]);

	if (!foundDecks) {
		return null;
	}

	function Results() {
		return (
			<React.Fragment>
				<ul>
					{foundDecks.map((foundDeck) => (
						<Link to={`/cards/${foundDeck.id}/study`}>
							<li>{foundDeck.title}</li>
						</Link>
					))}
				</ul>
			</React.Fragment>
		);
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid container item xs={24} spacing={3}>
					<Results />
				</Grid>
			</Grid>
		</div>
	);
}
