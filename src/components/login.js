import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../reducers/authentication";
import { useSelector, useDispatch } from "react-redux";
import AdbIcon from '@material-ui/icons/Adb';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: "#5680E9",
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		backgroundColor: "#5680E9"
	},
}));

export default function LoginPanel() {
	const classes = useStyles();

	const [email, setEmail] = useState("test5@gmail.com");
	const [password, setPassword] = useState("password");
	const [username, setUsername] = useState("test5");
	const id = useSelector((state) => state.User.id);
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(login(email, username, password));
	};
	const updateEmail = (e) => {
		setEmail(e.target.value);
	};
	const updateUsername = (e) => {
		setUsername(e.target.value);
	};
	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (id) {
		return <Redirect to="/" />;
	}

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<AdbIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Welcome to FlashNerd
          </Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoFocus
							onChange={updateEmail}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="UserName"
							name="username"
							onChange={updateUsername}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							onChange={updatePassword}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handleSubmit}
						>
							Login
            </Button>
						<Grid container>
							<Grid item xs>
							</Grid>
							<Grid item>
								<Link href="/signup" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
