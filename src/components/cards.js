import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { getAllCards } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../index.css";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
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
				<Grid container item xs={24} spacing={3}>
					<FormRow />
				</Grid>
			</Grid>
		</div>
	);
}
