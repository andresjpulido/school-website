import { SIGNIN, SIGNOUT } from "../actions/authAction";

const initialState = {
	user: {
        name:"Anonymous",
        active: false
    },
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case SIGNIN: {
			return Object.assign({}, state, { user: action.payload });
		}
		case SIGNOUT: {
			return Object.assign({}, state, { user: action.payload });
		}
		default: {
			return { ...state };
		}
	}
}
