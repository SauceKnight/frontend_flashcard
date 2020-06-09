import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../reducers/authentication"
import { useSelector, useDispatch } from 'react-redux'

function LoginPanel(props) {
    const [email, setEmail] = useState("test3@gmail.com")
    const [password, setPassword] = useState("password")
    const [username, setUsername] = useState('test2')
    const token = useSelector(state => state.authentication.token)
    const id = useSelector(state => state.authentication.id)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(email, username, password));

    }
    const updateEmail = (e) => {
        setEmail(e.target.value);

    }
    const updateUsername = (e) => {
        setUsername(e.target.value);

    }
    const updatePassword = (e) => {
        setPassword(e.target.value);

    }


    if (token) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <div>
                <form className="" onSubmit={handleSubmit}>
                    <h4>We are FLASHNERD</h4>
                    <p>
                        Welcome back! Log in to your account
							<br></br>
							to get flashcard!
						</p>

                    <input
                        className=""
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={updateEmail}
                    />
                    <input
                        className=""
                        type="text"
                        name="username"
                        placeholder="User Name"
                        value={username}
                        onChange={updateUsername}
                    />

                    <input
                        className=""
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={updatePassword}
                    />

                    <button type="submit">
                        LOGIN
						</button>
                    {/* <h3>
                            You need an account?{" "}
                            <span>
                                <Link className="sign-up" to="/signup">
                                    {" "}
									SIGNUP
								</Link>
                            </span>
                        </h3> */}
                </form>
            </div>
        </div>
    );

}

export default LoginPanel;
