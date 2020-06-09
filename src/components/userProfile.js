import React, { useState, useEffect, Component } from "react";
import { Redirect } from "react-router-dom";
import { profileShowUp } from "../reducers/authentication";
import { useSelector, useDispatch } from "react-redux";
import { ID_KEY } from "../reducers/authentication";

const Profile = (props) => {
	const user = useSelector((state) => state.User.user);
	const { id } = props.match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(profileShowUp(id));
	}, []);

	if (!user) {
		return null;
	}

	console.log("TEST", user);
	return (
		<main className="">
			<p className="">Profile</p>
			<div>
				<span className="">Email:</span>{" "}
				<span className="">{user[0].email}</span>
			</div>
			<div>
				<span className="">UserName:</span>
				<span className="">{user[0].username}</span>
			</div>
		</main>
	);
};

export default Profile;
