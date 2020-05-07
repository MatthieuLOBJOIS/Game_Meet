//action type
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
export const DISPLAY_MESSAGES = 'DISPLAY_MESSAGE';
export const SAVE_MESSAGES = 'SAVE_MESSAGES';
export const GROUP_CHAT_ID = 'GROUP_CHAT_ID';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

//action creators
export const sendMessage = (sessionData: any, friends: any) => ({
	type: SEND_MESSAGE,
	sessionData,
	friends
});

export const clearMessage = () => ({
	type: CLEAR_MESSAGE
});

export const changeMessage = (value: string) => ({
	type: CHANGE_MESSAGE,
	value
});

export const displayMessages = (sessionData: any, friends: any) => ({
	type: DISPLAY_MESSAGES,
	sessionData,
	friends
});

export const saveMessages = (messages: any) => ({
	type: SAVE_MESSAGES,
	messages
});

export const groupChatId = (groupChatId: any) => ({
	type: GROUP_CHAT_ID,
	groupChatId
});

export const deleteMessage = () => ({
	type: DELETE_MESSAGE
});
