import { SAVE_LIST_FRIENDS } from '../actions/friends';

const initialState = {
	listFriends: []
};

const friendsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SAVE_LIST_FRIENDS: {
			//console.log(action.response);
			return {
				...state,
				listFriends: action.response
			};
		}
		default:
			return state;
	}
};

export default friendsReducer;
