import React, { useEffect } from "react";
import { fetchFavoriteUserDecks } from "../reducers/authentication";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// import Icon from '@material-ui/core/Icon';
import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from '@material-ui/icons/Mail';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import FormDialog from "./newdeck";
import ShowCards from "./cards";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: "#f57c00",
	},

	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
}));

function PermanentDrawerLeft(props) {
	const userid = useSelector((state) => state.User.id);
	const username = useSelector((state) => state.User.username);
	const favoriteDecks = useSelector((state) => state.User.favoritedecks);
	const decks = useSelector((state) => state.Deck);
	const cards = useSelector((state) => state.Cards);
	let shownDecks = Object.values(favoriteDecks);
	let displayedDecks = [];
	for (let i = 0; i <= shownDecks.length; i++) {
		if (decks[shownDecks[i]]) {
			displayedDecks.push(decks[shownDecks[i]]);
		}
	}

	let user_deck_count_display;
	console.log(props);

	// useEffect(() => {
	//     // fetchDecks(1),
	//     fetchFavoriteUserDecks(userid)
	// }, [])
	const classes = useStyles();
	// TODO: get these values from the database :)
	const displayName = username;
	const user_deck_count = 0;
	// console.log(favoriteDecks);
	if (favoriteDecks) {
		user_deck_count_display = "Your decks: " + favoriteDecks.length;
	}
	const user_initials = username
		.split(/\s/)
		.reduce((response, word) => (response += word.slice(0, 1)), "")
		.slice(0, 2);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left"
			>
				<Box
					component="div"
					m={2}
					display="flex"
					alignItems="center"
					flexDirection="column"
				>
					{/* Div for avatar, username, profile stuff: */}
					{/* <Avatar alt="BreakBot" src="https://i.imgur.com/byozd3F.png" /> */}
					<Avatar className={classes.purple}>{user_initials}</Avatar>
					<Typography variant="h5" noWrap>
						{" "}
						{/* Username goes here */}
						{displayName}
					</Typography>
					<Typography variant="h6" noWrap>
						{" "}
						{/* deck count goes here */}
						{user_deck_count_display}
					</Typography>
					{/* 
                    NOTE: this would be an excellent place to put a sign-in button 
                    if the user is not signed in, and hide the avatar/username
                    */}
				</Box>

				<Divider />
				<List>
					<ListItem>
						<FormDialog />
					</ListItem>
					{displayedDecks.map((deck) => (
						<Link to={`/cards/${deck.id}/study`} className="link">
							<ListItem button key={deck.id}>
								<ListItemIcon></ListItemIcon>
								<ListItemText primary={deck.title} />
							</ListItem>
						</Link>
					))}
				</List>
				<Divider />
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
			</main>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		deckData: state.Deck.decks,
		favoritesData: state.User.favoritedecks,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchDecks: (userid) => dispatch(fetchDecks(userid)),
		fetchFavoriteUserDecks: (userid) =>
			dispatch(fetchFavoriteUserDecks(userid)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PermanentDrawerLeft);
