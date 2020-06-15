import React from "react";
// import { withRouter } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "./logout"
import Button from "@material-ui/core/Button";
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";
// import SettingsIcon from '@material-ui/icons/Settings';



const useStyles = makeStyles((theme) => ({
    text: {
        color: grey[50]
    },
    settings: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 5
    }

}));

export default function GearButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.settings}>
            <SettingsIcon aria-controls="simple-menu" aria-haspopup="true" className={classes.text} onClick={handleClick} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <LogoutButton />
                </MenuItem>
            </Menu>
        </div>
    );
} 