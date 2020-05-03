import { LIST_DATA_USERS, ACTUALIZE_DATA_USER } from '../actions/user';

const initialState = {
	listUsersData: [],
	sessionData: null
};

const userReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LIST_DATA_USERS: {
			return {
				...state,

				listUsersData: action.data
			};
		}
		case ACTUALIZE_DATA_USER: {
			return {
				...state,

				sessionData: action.data
			};
		}

		default:
			return state;
	}
};

export default userReducer;
