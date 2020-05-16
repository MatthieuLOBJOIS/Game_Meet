import {
	VALID_STATUS_FIELD,
	SIGNUP_ERROR,
	SIGNUP_SUCCESS,
	DISPLAY_ERROR_FIELD,
	SAVE_USER_COORDINATE,
	SHOW_PASSWORD,
	SHOW_CONFIRM_PASSWORD
} from '../actions/register';

const initialMessage = 'veuillez remplir ce champ';
const initialState = {
	name: 'inscription',
	displayError: false,
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
		case DISPLAY_ERROR_FIELD: {
			console.log('error register');
			return { ...state, displayError: true };
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
