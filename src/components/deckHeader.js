import React, { useEffect } from 'react'
import { fetchFavoriteUserDecks } from '../reducers/authentication';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import FormDialog from './newdeck'
import ShowCards from "./cards";
import Button from "@material-ui/core/Button";
import { orange, grey } from '@material-ui/core/colors';
import NewCard from './newcard'
import StarIcon from '@material-ui/icons/Star';






const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        textAlign: "center"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#f57c00"
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

function DeckHeader(props) {
    const decks = useSelector(state => state.Deck)
    const cards = useSelector(state => state.Cards)
    const classes = useStyles();
    const { id } = props.match.params;

    let iconStyles = {
        fontSize: '24px',
        color: grey[50]
    };
    // TODO: get these values from the database :)
    if (decks[id]) {
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    {console.log(cards)}
                    <div>
                        <h1>{decks[id].title}</h1>
                    </div>
                    <div>
                        <Link to={`/cards/${id}/quiz`} className="link">
                            <Button variant="" color="primary">
                                <AddIcon style={{ color: orange[300] }} />
                                Quiz
                            </Button>
                        </Link>
                        <Link to={`/cards/${id}/study`} className="link">
                            <Button variant="" color="primary">
                                <AddIcon style={{ color: orange[300] }} />
                               Study
                            </Button>
                        </Link>
                        <NewCard props={id} />
                        <Button variant="" color="primary">
                            <StarIcon style={iconStyles} />
                        </Button>
                    </div>
                </AppBar>
            </div >
        );
    }
    else {
        return null;
    }

}

export default DeckHeader


