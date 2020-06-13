import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { login } from "../reducers/authentication";
import { useSelector, useDispatch } from "react-redux";

import "../index.css";

function LoginPanel(props) {
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
		<div className="login_background">
			<div>
				<div className="login-image"></div>
				<form className="login-form" onSubmit={handleSubmit}>
					<h2>FLASHNERD</h2>
					<p>
						Welcome back! Log in to your account
						<br></br>
						to get flashcard!
					</p>

					<input
						className="in-form-field"
						type="text"
						name="email"
						placeholder="Email"
						value={email}
						onChange={updateEmail}
					/>
					<input
						className="in-form-field"
						type="text"
						name="username"
						placeholder="User Name"
						value={username}
						onChange={updateUsername}
					/>

					<input
						className="in-form-field"
						type="password"
						name="password"
						placeholder="Password"
						value={password}
						onChange={updatePassword}
					/>

					<button type="submit" className="login-button">
						Login
					</button>
					<h3>
						No account?{" "}
						<span>
							<Link className="sign-up" to="/signup">
								{" "}
								Create one
							</Link>
						</span>
					</h3>
				</form>
			</div>
		</div>
	);
}

export default LoginPanel;
