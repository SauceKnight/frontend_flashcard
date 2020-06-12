import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { getAllCards } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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

export default function ShowCards(props) {
	const classes = useStyles();
	const cards = useSelector((state) => state.Cards);
	const { id } = props.match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCards(id));
	}, [id]);

	if (!cards) {
		return null;
	}

	function FormRow() {
		return (
			<React.Fragment>
				{Object.values(cards).map((card) => (
					<>
						<Grid item xs={6}>
							<Paper className={classes.paper}>{card.question}</Paper>
						</Grid>

						<Grid item xs={6}>
							<Paper className={classes.paper}>{card.answer}</Paper>
						</Grid>
					</>
				))}
			</React.Fragment>
		);
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid item xs={6}>
					<h3 className={classes.study}>Question</h3>
				</Grid>

				<Grid item xs={6}>
					<h3 className={classes.study}>Answer</h3>
				</Grid>
				<Grid container item xs={24} spacing={3}>
					<FormRow />
				</Grid>
			</Grid>
		</div>
	);
}
