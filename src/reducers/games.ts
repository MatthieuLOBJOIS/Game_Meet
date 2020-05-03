import { LIST_GAMES, SAVE_LIST_CHOOSE_GAMES } from '../actions/games';

const initialState = {
	listGames: [],
	listChooseGames: []
};

const loginReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LIST_GAMES: {
			//console.log(action.data, 'lol');
			return { ...state, listGames: action.data };
		}
		case SAVE_LIST_CHOOSE_GAMES: {
			return { ...state, listChooseGames: action.data };
		}
		default:
			return state;
	}
};

export default loginReducer;
