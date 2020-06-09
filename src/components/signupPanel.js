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
	const token = useSelector((state) => state.authentication.token);
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

	if (token) {
		return <Redirect to="/" />;
	}
	return (
		<main>
			<form className="" onSubmit={handleSignup}>
				<p>
					Please fill in all the required
					<br></br>
					fields to create a new user account.
				</p>
				<input
					className=""
					type="text"
					placeholder="Email"
					value={email}
					onChange={updateEmail}
					name="email"
					id="email"
					required
				/>
				<input
					className=""
					type="text"
					placeholder="User Name"
					value={username}
					onChange={updateUsername}
					name="username"
					id="userame"
					required
				/>
				<input
					className=""
					type="password"
					placeholder="Password"
					value={password}
					onChange={updatePassword}
					name="password"
					id="password"
					required
				/>
				<input
					className=""
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={updateConfirmPassword}
					name="confirmPassword"
					id="confirmPassword"
					autoComplete="nope"
					required
				/>
				<button className="" type="submit">
					SIGNUP
				</button>
				<h3>
					Already have an account?{" "}
					<span>
						<Link className="sign-up" to="/login">
							{" "}
							LOGIN
						</Link>
					</span>
				</h3>
			</form>
		</main>
	);
};

export default SignupPanel;
