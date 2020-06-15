import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth + 10,
        alignItems: "center",
        justifyContent: "space-evenly",
        display: "flex",
        flexDirection: "column"
    },
    img: {
        height: 500
    }
}));

export default function Welcome(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <h1>Lets get Geeky!</h1>
            <img className={classes.img} src="https://i.pinimg.com/originals/c3/9d/a0/c39da0f4f63c55f1f8a485ff0bb01804.jpg" />
            <h2>Create or search/select a deck to begin your knowledge journey!</h2>

        </div>
    )

}
