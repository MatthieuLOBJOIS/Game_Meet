import { LIST_GAMES, SAVE_URL_PICTURE_GAMES } from '../actions/games';

const initialState = {
	listGames: [],
	urlPictureGames: ''
};

const loginReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LIST_GAMES: {
			//console.log(action.data, 'lol');
			return { ...state, listGames: action.data };
		}
		case SAVE_URL_PICTURE_GAMES: {
			//console.log(action.url[0], action.url[1]);

			return { ...state, urlPictureGames: action.url };
		}
		default:
			return state;
	}
};

export default loginReducer;
