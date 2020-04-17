import {
	CHANGE_FIELD,
	SHOW_PASSWORD,
	SHOW_CONFIRM_PASSWORD,
	CHECK_LOGGED,
	SAVE_USER,
	SAVE_USER_COORDINATE
} from '../actions/user';
import { CHOOSE_GAMES } from '../actions/games';

const initialState = {
	mail: '',
	password: '',
	confirmPassword: '',
	pseudo: '',
	city: '',
	address: '',
	location: {},
	chooseGames: [],
	showPassword: false,
	showConfirmPassword: false,
	userData: null,
	isLogged: null
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

		case SHOW_CONFIRM_PASSWORD: {
			return { ...state, showConfirmPassword: !state.showConfirmPassword };
		}

		case CHECK_LOGGED: {
			localStorage.setItem(
				'isUser',
				JSON.stringify({
					...state,

					isLogged: action.response
				})
			);
			return {
				...state,

				isLogged: action.response
			};
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
