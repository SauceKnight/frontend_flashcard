import React, { useEffect } from "react";
import { getOneDeck } from "../deck/deckActions";
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
import Button from "@material-ui/core/Button";
import { orange, grey } from "@material-ui/core/colors";
import NewCard from "./newcard";
import FavoriteStar from "./FavoriteStar";
import StarIcon from "@material-ui/icons/Star";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        textAlign: "center",
        backgroundColor: "#5680E9"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#f57c00",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

function SearchDeckHeader(props) {
    const decks = useSelector((state) => state.Deck);
    const cards = useSelector((state) => state.Cards);
    const user = useSelector((state) => state.User);
    const classes = useStyles();
    const dispatch = useDispatch();
    const { id } = props.match.params;
    useEffect(() => {
        dispatch(getOneDeck(user.id, id));
    }, [id]);

    let iconStyles = {
        fontSize: "24px",
        color: grey[50],
    };
    // TODO: get these values from the database :)
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                {console.log(cards)}
                <div>
                    <h1>We hope to help you improve your learning through one of the following Decks!</h1>
                </div>
            </AppBar>
        </div>
    );

}

export default SearchDeckHeader;
