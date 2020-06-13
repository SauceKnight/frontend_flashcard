import React from "react";
// import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/authentication"
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';


const LogoutButton = (props) => {
    const dispatch = useDispatch()
    // const id = useSelector(state => state.User.id)
    // if (!id) {
    //     return <Redirect to="/login" />;
    // }

    const handleLogout = () => {
        console.log("WE MADE IT");
        dispatch(logout())
        console.log("WE MADE IT..... version 2");
        // return <Redirect to="/login" />;
    };

    return (
        <div>
            <Link to={"/login"} className="link">
                <Button
                    size="small"
                    // color="secondary"
                    variant="contained"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Link>
            
        </div>
    );
};

export default LogoutButton;