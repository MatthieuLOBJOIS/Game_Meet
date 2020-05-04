import { CHECK_LOGGED } from '../actions/login';

const initialState = {
	name: 'connexion',
	isLogged: null,
	sessionData: null
};

const loginReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case CHECK_LOGGED: {
			window.location.reload();
			if (action.response === true) {
				localStorage.setItem('isLogged', JSON.stringify({ isLogged: action.response, uid: action.data.uid }));
			}

			return {
				...state,

				sessionData: action.data
			};
		}
		default:
			return state;
	}
};

export default loginReducer;
