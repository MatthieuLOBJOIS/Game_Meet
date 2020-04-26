import {
	CHANGE_FIELD,
	SHOW_PASSWORD,
	SHOW_CONFIRM_PASSWORD,
	CHECK_LOGGED,
	SAVE_USER,
	SAVE_USER_COORDINATE,
	LIST_DATA_USERS
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
	isLogged: null,
	listUsersData: []
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

		case CHOOSE_GAMES: {
			return {
				...state,

				chooseGames: action.data
			};
		}

		case SAVE_USER_COORDINATE: {
			return { ...state, location: action.data };
		}

		case LIST_DATA_USERS: {
			//console.log(action.data, 'userdata');
			return {
				...state,

				listUsersData: action.data
			};
		}

		default:
			return state;
	}
};

export default userReducer;
