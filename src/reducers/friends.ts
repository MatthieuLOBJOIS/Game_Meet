import { SAVE_LIST_FRIENDS, SAVE_ONE_FRIENDS, SEARCH_FRIENDS } from '../actions/friends';

const initialState = {
	listFriends: [],
	myFriends: null,
	search: ''
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

		case SAVE_ONE_FRIENDS: {
			//console.log(action.data);
			localStorage.setItem(
				'friends',
				JSON.stringify({ myFriends: action.data, listFriends: action.listFriends })
			);
			return { ...state, myFriends: action.data };
		}

		case SEARCH_FRIENDS: {
			return {
				...state,
				search: action.value
			};
		}

		default:
			return state;
	}
};

export default friendsReducer;
