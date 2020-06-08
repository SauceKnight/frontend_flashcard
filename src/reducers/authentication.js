
import { baseUrl } from "../config"

const SET_TOKEN = "flashnerd/authentication/SET_TOKEN";
const REMOVE_TOKEN = "flashnerd/authentication/REMOVE_TOKEN";
export const TOKEN_KEY = "flashnerd/authentication/TOKEN";


export const setToken = (token) => ({ type: SET_TOKEN, token });
export const removeToken = (token) => ({ type: REMOVE_TOKEN });

export const loadToken = () => async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
        dispatch(setToken(token));
    }
};
export const profileShowUp = (id) => async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN_KEY);

    if (token) {
        const response = await fetch(`${baseUrl}/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `${token}`,
            },
        });

        if (response.ok) {
            const { user } = await response.json();

            window.localStorage.setItem(TOKEN_KEY, token);
            dispatch(setUser(user));
        }
    } else {
        console.log("Failed");
    }
};

export const login = (email, password, username) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username }),
    });
    if (response.ok) {
        const {
            token,
            user: { id },
        } = await response.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        dispatch(setToken(token));
    }
};

export const logout = () => async (dispatch, getState) => {
    window.localStorage.removeItem(TOKEN_KEY);
    dispatch(removeToken());
};


export default function reducer(state = {}, action) {
    switch (action.type) {
        case SET_TOKEN: {
            return {
                ...state,
                token: action.token,
            };
        }

        case REMOVE_TOKEN: {
            const newState = { ...state };
            console.log(newState);
            delete newState.token;
            return newState;
        }
        default:
            return state;
    }
}