import React from "react";
// import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/authentication"

const LogoutButton = (props) => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.authentication.token)
    if (!token) {
        return null;
    }

    const handleLogout = () => {
        dispatch(logout())
    };

    return (
        <div>
            <button className="" onClick={handleLogout}>
                LOGOUT
			</button>
        </div>
    );
};

export default LogoutButton;