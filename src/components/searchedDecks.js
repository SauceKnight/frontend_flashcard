import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { getAllCards } from "../reducers/cardManagement";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../index.css";

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth + 5,
        paddingRight: 10
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    study: {
        paddingTop: theme.spacing(5),
        textAlign: "center",
    },

}));

export default function SearchDecks(props) {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <h1>Hello</h1>
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
