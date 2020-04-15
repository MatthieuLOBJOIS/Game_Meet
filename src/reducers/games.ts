import { LIST_GAMES } from '../actions/games';

const initialState = {
	listGames: []
};

const loginReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LIST_GAMES: {
			//console.log(action.data, 'lol');
			return { ...state, listGames: action.data };
		}
		default:
			return state;
	}
};

export default loginReducer;
