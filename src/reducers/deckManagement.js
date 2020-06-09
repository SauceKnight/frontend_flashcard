
// import { baseUrl } from "../config"

// const CREATE_DECK = "flashnerd/authentication/SET_TOKEN";
// const SET_DECKS = "flashnerd/decks/SET";
// export const TOKEN_KEY = "flashnerd/authentication/TOKEN";


// export const setToken = (token) => ({ type: SET_TOKEN, token });
// export const show = () => ({ type: GET_DECKS });

// export const fetchDecks = (token) => async (dispatch) => {

//     const response = await fetch(`${baseUrl}/decks`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             Authorization: `${token}`,
//         },
//     });
// }

// //         if (response.ok) {
// //             const { user } = await response.json();

// //             window.localStorage.setItem(TOKEN_KEY, token);
// //             dispatch(setUser(user));
// //         }
// //     } else {
// //         console.log("Failed");
// //     }
// // };

// export const login = (email, password, username) => async (dispatch) => {
//     const response = await fetch(`${baseUrl}/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password, username }),
//     });
//     if (response.ok) {
//         const {
//             token,
//             // user: { id },
//         } = await response.json();
//         window.localStorage.setItem(TOKEN_KEY, token);
//         dispatch(setToken(token));
//     }
// };

// export const logout = () => async (dispatch, getState) => {
//     window.localStorage.removeItem(TOKEN_KEY);
//     dispatch(removeToken());
// };


// export default function reducer(state = {}, action) {
//     switch (action.type) {
//         case SET_DECKS: {
//             return {
//                 ...state,
//                 decks: action.decks,
//                 token: action.token,
//             };
//         }

//         case REMOVE_TOKEN: {
//             const newState = { ...state };
//             console.log(newState);
//             delete newState.token;
//             return newState;
//         }
//         default:
//             return state;
//     }
// }