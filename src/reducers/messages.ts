import { CHANGE_MESSAGE, GROUP_CHAT_ID, CLEAR_MESSAGE, SAVE_MESSAGES } from '../actions/messages';

const initialState = {
	message: '',
	talk: [],
	groupChatId: null
};

const loginReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case CHANGE_MESSAGE: {
			return {
				...state,
				message: action.value
			};
		}

		case CLEAR_MESSAGE: {
			return {
				...state,
				message: ''
			};
		}

		case SAVE_MESSAGES: {
			return {
				...state,
				talk: action.messages
			};
		}

		case GROUP_CHAT_ID: {
			//console.log(action.groupChatId)
			return { ...state, groupChatId: action.groupChatId };
		}

		default:
			return state;
	}
};

export default loginReducer;
