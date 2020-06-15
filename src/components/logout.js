import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/authentication";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	spacing: {
		margin: 5
	}

}));

const LogoutButton = (props) => {
	const dispatch = useDispatch();
	const id = useSelector((state) => state.User.id);
	const history = useHistory()
	const classes = useStyles();
	if (!id) {
		return null;
	}

	const handleLogout = () => {
		dispatch(logout());
		history.push('/login')

	};

	return (
		<div>
			<div>
				<Button variant="contained" color="primary" className={classes.spacing} onClick={handleLogout}>
					Edit Profile
</Button>

			</div>
			<div>
				<Button variant="contained" color="primary" className={classes.spacing} onClick={handleLogout}>
					Logout
</Button>

			</div>
		</div>
	);
};

export default LogoutButton;
