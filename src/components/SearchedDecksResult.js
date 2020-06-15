import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { getAllCards } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getDeckByTitle } from "../deck/deckActions";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchFavoriteStar from "./SearchFavoriteStar";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { blue } from "@material-ui/core/colors";

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
	icon: {
		paddingRight: 8,
		fontSize: 60,
		color: blue[500]
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
				<List>
					{foundDecks.map((foundDeck) => (
						<Link to={`/cards/${foundDeck.id}/study`} className="link">
							<ListItem button key={foundDeck.id}>
								{/* <ListItemIcon></ListItemIcon> */}
								<AssignmentIcon className={classes.icon} />
								<ListItemText primary={foundDeck.title} secondary={foundDeck.description} />
								< SearchFavoriteStar props={parseInt(foundDeck.id)} />
								<ArrowForwardIosIcon />
							</ListItem>
							<Divider />
						</Link>

					))}
				</List>
			</React.Fragment>
		);
	}

	return (
		<div className={classes.root}>
			<Results />
		</div>
	);
}
