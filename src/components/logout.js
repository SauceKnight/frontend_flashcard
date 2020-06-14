import React from "react";
// import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/authentication";

const LogoutButton = (props) => {
	const dispatch = useDispatch();
	const id = useSelector((state) => state.User.id);
	if (!id) {
		return null;
	}

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div>
			<button className="logout-button" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};

export default LogoutButton;
