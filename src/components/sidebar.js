import React, { useEffect } from 'react'
import { fetchDecks, fetchFavoriteUserDecks } from '../deck/deckActions';
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




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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

function PermanentDrawerLeft({ favoritesData, fetchFavoriteUserDecks }) {
    const userid = useSelector(state => state.User.id)
    const username = useSelector(state => state.User.username)

    useEffect(() => {
        // fetchDecks(1),
        fetchFavoriteUserDecks(userid)
    }, [])
    const classes = useStyles();
    // TODO: get these values from the database :)
    const displayName = username;
    const user_deck_count = 0;
    const user_deck_count_display = "Your decks: " + favoritesData.length;
    const user_initials = username.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '').slice(0, 2);

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
                <Box component="div" m={2} display="flex" alignItems="center" flexDirection="column">
                    {/* Div for avatar, username, profile stuff: */}
                    {/* <Avatar alt="BreakBot" src="https://i.imgur.com/byozd3F.png" /> */}
                    <Avatar className={classes.purple}>{user_initials}</Avatar>
                    <Typography variant="h5" noWrap> {/* Username goes here */}
                        {displayName}
                    </Typography>
                    <Typography variant="h6" noWrap> {/* deck count goes here */}
                        {user_deck_count_display}
                    </Typography>
                    {/* 
                    NOTE: this would be an excellent place to put a sign-in button 
                    if the user is not signed in, and hide the avatar/username
                    */}
                </Box>

                <Divider />
                <List>
                    {['Create new Deck'].map((text, index) => (
                        <ListItem button key={text} onClick={() => {
                            alert("✔️ This works on every component!");
                        }}>
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>

                    ))}
                    {favoritesData.map(deck => (<ListItem button key={deck.id} onClick={() => {
                        alert("✔️ This works on every component!");
                    }}>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={deck.title} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        deckData: state.Deck.decks,
        favoritesData: state.Deck.favoritedecks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchDecks: (userid) => dispatch(fetchDecks(userid)),
        fetchFavoriteUserDecks: (userid) => dispatch(fetchFavoriteUserDecks(userid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PermanentDrawerLeft)

