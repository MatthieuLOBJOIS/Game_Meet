import { CHANGE_FIELD, SHOW_PASSWORD, SAVE_USER } from '../actions/user';

const initialState = {
	mail: '',
	password: '',
	showPassword: false,
	userData: null,
	isLogged: false
};

const userReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case CHANGE_FIELD: {
			const target = action.identifier;
			return {
				...state,

				[target]: action.newValue
			};
		}

		case SHOW_PASSWORD: {
			return { ...state, showPassword: !state.showPassword };
		}

		case SAVE_USER:
			return {
				...state,
				userData: action.data,
				isLogged: action.isLogged,
				email: '',
				password: ''
			};

		default:
			return state;
	}
};

export default userReducer;
