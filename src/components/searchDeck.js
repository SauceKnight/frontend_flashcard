import React, { useState, useEffect } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { getDeckByTitle } from "../deck/deckActions";
import { useSelector, useDispatch } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { orange, grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: grey[50]
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
		color: grey[50]
	},

}));

export default function SearchDecks(props) {
	const foundDecks = useSelector((state) => state.Deck.foundDecks);
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory()

	const [searchContent, setSearchContent] = useState("");

	// useEffect(() => {}, [searchContent]);

	const updateSearch = (e) => {
		//e.preventDefault();
		setSearchContent(e.target.value);
		// dispatch(getDeckByTitle(e.target.value));
	};

	const handleSubmit = (e) => {
		if (e.keyCode == 13) {
			e.preventDefault();
			history.push(`/search/${searchContent}`)
		}
	}

	return (
		<>
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon onClick={handleSubmit} />
				</div>
				<InputBase
					placeholder="Search for Decks"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ 'aria-label': 'search' }}
					onChange={updateSearch}
					onKeyDown={handleSubmit}
				/>
			</div>
		</>
	);
}

