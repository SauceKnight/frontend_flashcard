import { baseUrl } from "../config";
import jwt_decode from "jwt-decode";

const SET_TOKEN = "flashnerd/authentication/SET_TOKEN";
const REMOVE_TOKEN = "flashnerd/authentication/REMOVE_TOKEN";
export const TOKEN_KEY = "flashnerd/authentication/TOKEN";
const SET_USER = "flashnerd/authentication/SET_USER";
export const ID_KEY = "flasknerd/authentication/ID_KEY";

export const setToken = (payload) => ({
	type: SET_TOKEN,
	payload,
});
export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setUser = (user) => ({ type: SET_USER, user });

export const loadToken = () => async (dispatch) => {
	const token = window.localStorage.getItem(TOKEN_KEY);
	if (token) {
		dispatch(setToken(token));
	}
};
export const profileShowUp = (id) => async (dispatch) => {
	const token = window.localStorage.getItem(TOKEN_KEY);
	if (token) {
		const response = await fetch(`http://localhost:5000/users/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": `${token}`,
			},
		});

		if (response.ok) {
			const res = await response.json();
			console.log("Ressss", res);

			window.localStorage.setItem(TOKEN_KEY, res.token);
			dispatch(setUser(res.data));
		}
	} else {
		console.log("Failed");
	}
};

export const login = (email, username, password) => async (dispatch) => {
	const response = await fetch(`http://localhost:5000/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, username, password }),
	});
	if (response.ok) {
		const res = await response.json();
		window.localStorage.setItem(TOKEN_KEY, res.token);
		window.localStorage.setItem(ID_KEY, res.id);

		const decodedUser = jwt_decode(res.token);
		dispatch(setToken(decodedUser));
	}
};

export const logout = () => async (dispatch, getState) => {
	window.localStorage.removeItem(TOKEN_KEY);
	dispatch(removeToken());
};

export const signup = (email, username, password) => async (dispatch) => {
	const response = await fetch(`http://localhost:5000/signup`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email,
			username,
			password,
		}),
	});
	if (response.ok) {
		const res = await response.json();
		window.localStorage.setItem(TOKEN_KEY, res.token);
		const decodedUser = jwt_decode(res.token);
		dispatch(setToken(decodedUser));
	}
};

export default function reducer(state = {}, action) {
	switch (action.type) {
		case SET_TOKEN:
			return {
				...state,
				id: action.payload.id,
				username: action.payload.username,
			};

		case REMOVE_TOKEN:
			const newState = { ...state };
			console.log(newState);
			delete newState.token;
			return newState;

		case SET_USER:
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
}
