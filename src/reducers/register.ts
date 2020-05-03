import { VALID_STATUS_FIELD, SIGNUP_ERROR, SIGNUP_SUCCESS } from '../actions/register';
import { SAVE_USER, SAVE_USER_COORDINATE, SHOW_PASSWORD, SHOW_CONFIRM_PASSWORD } from '../actions/user';
const initialMessage = 'veuillez remplir ce champ';
const initialState = {
	name: 'inscription',
	isSubmit: false,
	isRegister: false,
	location: {},
	showPassword: false,
	showConfirmPassword: false,
	mail: {
		status: true,
		message: initialMessage,
		value: ''
	},
	password: {
		status: true,
		message: initialMessage,
		value: ''
	},
	confirmPassword: {
		status: true,
		message: initialMessage,
		value: ''
	},
	pseudo: {
		status: true,
		message: initialMessage,
		value: ''
	},
	city: {
		status: true,
		message: initialMessage,
		value: ''
	},
	address: {
		status: true,
		message: initialMessage,
		value: ''
	},
	chooseGames: {
		status: true,
		message: 'choisissez minimum un jeu',
		value: []
	}
};

const registerReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case VALID_STATUS_FIELD: {
			const target = action.target;
			const status = action.status;
			const message = action.message;
			const newValue = action.newValue;
			return {
				...state,
				[target]: {
					status: status,
					message: message,
					value: newValue
				}
			};
		}
		case SAVE_USER: {
			return { ...state, isSubmit: true };
		}

		case SIGNUP_ERROR: {
			console.log('error firestore');
		}

		case SIGNUP_SUCCESS: {
			console.log('success firestore');
			return { ...state, isRegister: true };
		}

		case SAVE_USER_COORDINATE: {
			return { ...state, location: action.data };
		}

		case SHOW_PASSWORD: {
			return { ...state, showPassword: !state.showPassword };
		}

		case SHOW_CONFIRM_PASSWORD: {
			return { ...state, showConfirmPassword: !state.showConfirmPassword };
		}

		default:
			return state;
	}
};

export default registerReducer;
