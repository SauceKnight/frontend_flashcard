import React from 'react';
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

export default function PermanentDrawerLeft() {
    const classes = useStyles();
    // TODO: get these values from the database :)
    const username = "Break Bot";
    const user_deck_count = 0;
    const user_deck_count_display = "Your decks: " + String(user_deck_count);
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
                        {username}
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
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}

