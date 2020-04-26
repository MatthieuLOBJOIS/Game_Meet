import { VALID_STATUS_FIELD, SIGNUP_ERROR, SIGNUP_SUCCESS } from '../actions/register';
import { SAVE_USER } from '../actions/user';
//import { validField } from '../services/validateField';
import { validStatusField } from '../actions/register';
const initialMessage = 'veuillez remplir ce champ';
const initialState = {
	name: 'inscription',
	isSubmit: false,
	isRegister: false,
	mail: {
		status: true,
		message: initialMessage
	},
	password: {
		status: true,
		message: initialMessage
	},
	confirmPassword: {
		status: true,
		message: initialMessage
	},
	pseudo: {
		status: true,
		message: initialMessage
	},
	city: {
		status: true,
		message: initialMessage
	},
	address: {
		status: true,
		message: initialMessage
	},
	chooseGames: {
		status: true,
		message: 'choisissez minimum un jeu'
	}
};

const registerReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case VALID_STATUS_FIELD: {
			const target = action.target;
			const status = action.status;
			const message = action.message;

			return {
				...state,
				[target]: {
					status: status,
					message: message
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

		default:
			return state;
	}
};

export default registerReducer;
