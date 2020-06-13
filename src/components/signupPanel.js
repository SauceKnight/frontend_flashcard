import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../reducers/authentication";
import { Link } from "react-router-dom";

const SignupPanel = (props) => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const id = useSelector((state) => state.User.id);
	const dispatch = useDispatch();

	const handleSignup = async (e) => {
		e.preventDefault();
		dispatch(signup(email, username, password, confirmPassword));
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
	const updateConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	};

	if (id) {
		return <Redirect to="/" />;
	}
	return (
		<main className="signup_background">
			<form className="sign-up-form " onSubmit={handleSignup}>
				<p>
					Please fill in all the required
					<br></br>
					fields to create a new user account.
				</p>
				<input
					className="in-form-field"
					type="text"
					placeholder="Email"
					value={email}
					onChange={updateEmail}
					name="email"
					id="email"
					required
				/>
				<input
					className="in-form-field"
					type="text"
					placeholder="User Name"
					value={username}
					onChange={updateUsername}
					name="username"
					id="userame"
					required
				/>
				<input
					className="in-form-field"
					type="password"
					placeholder="Password"
					value={password}
					onChange={updatePassword}
					name="password"
					id="password"
					required
				/>
				<input
					className="in-form-field"
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={updateConfirmPassword}
					name="confirmPassword"
					id="confirmPassword"
					autoComplete="nope"
					required
				/>
				<button className="signup-button" type="submit">
					Signup
				</button>
				<h3>
					Already have an account?{" "}
					<span>
						<Link className="sign-up" to="/login">
							{" "}
							Login
						</Link>
					</span>
				</h3>
			</form>
		</main>
	);
};

export default SignupPanel;
