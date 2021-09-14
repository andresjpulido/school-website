import {
	REDIRECT,
} from "../actions/commonAction";

export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";

 function signIn() {
	return (dispatch, getState) => {
        dispatch({ type: SIGNIN, payload: {active:true} })
		dispatch({ type: REDIRECT, payload: "/home" });
	};
}

 function signOut() {
	return (dispatch, getState) => {
        dispatch({ type: SIGNOUT, payload: {active:false} })
		dispatch({ type: REDIRECT, payload: "/login" });
	};
}

export {signIn, signOut}