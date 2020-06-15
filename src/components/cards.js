import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { getAllCards } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditCard from './EditCard'
import DeleteCard from './DeleteCard'
import { grey } from "@material-ui/core/colors";

// import "../index.css";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth + 10,


	},
	paper: {
		padding: theme.spacing(8),
		textAlign: "center",
		color: grey[800]
	},
	icon: {
		padding: theme.spacing(1),
		textAlign: "center",
		alignItems: "center",
		justifyContent: "space-evenly",
		display: "flex",
	},
	study: {
		paddingTop: theme.spacing(5),
		textAlign: "center",
		color: "black",
	},
	first: {
		paddingTop: theme.spacing(5),
		textAlign: "center",
		color: "red",
	},
}));

export default function ShowCards(props) {
	const classes = useStyles();
	const cards = useSelector((state) => state.Cards);
	const user_id = useSelector(state => state.User.id);
	const deck = useSelector(state => state.Deck);
	const { id } = props.match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCards(id));
	}, [id]);

	if (!cards) {
		return null;
	}
	// console.log("Cards UserID", deck)
	function FormRow() {

		// if (user_id !== deck[id].user_id) {
		// 	return (
		// 		<React.Fragment>
		// 			{Object.values(cards).map((card) => (
		// 				<>
		// 					<Grid item xs={6}>
		// 						<Paper className={classes.paper}>{card.question}</Paper>
		// 					</Grid>

		// 					<Grid item xs={6}>
		// 						<Paper className={classes.paper}>{card.answer}</Paper>
		// 					</Grid>
		// 				</>
		// 			))}
		// 		</React.Fragment>
		// 	);
		// }

		// else {

		return (
			<React.Fragment>
				{Object.values(cards).map((card) => (
					<>
						<Grid item xs={5}>
							<Paper className={classes.paper}>{card.question}</Paper>
						</Grid>

						<Grid item xs={5}>
							<Paper className={classes.paper}>{card.answer}</Paper>
						</Grid>
						<Grid item xs className={classes.icon}>
							<DeleteCard props={card} />
							<EditCard props={card} />
						</Grid>
					</>
				))}
			</React.Fragment>
		);

		// }
	}
	if (Object.values(cards).length === 0) {
		return (
			<div className={classes.root}>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<h1 className={classes.study}>Create your first card to start studying :)</h1>
					</Grid>
				</Grid>
			</div>
		);
	}

	else {
		return (
			<div className={classes.root}>
				<Grid container spacing={1}>
					<Grid item xs={5}>
						<h3 className={classes.study}>Question</h3>
					</Grid>

					<Grid item xs={5}>
						<h3 className={classes.study}>Answer</h3>
					</Grid>
					<Grid container item xs={24} spacing={3}>
						<FormRow />
					</Grid>
				</Grid>
			</div>
		);


	}

}
