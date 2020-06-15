import React from "react";
// import { withRouter } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "./logout"
import Button from "@material-ui/core/Button";
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function GearButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <LogoutButton/>
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </div>
    );
}