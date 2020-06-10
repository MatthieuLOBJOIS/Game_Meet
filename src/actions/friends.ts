//action type
export const ADD_NEW_FRIENDS = 'ADD_NEW_FRIENDS';
export const ADD_NEW_FRIENDS_RESPONSE = 'ADD_NEW_FRIENDS_RESPONSE';
export const SAVE_LIST_FRIENDS = 'SAVE_LIST_FRIENDS';
export const GET_LIST_FRIENDS = 'GET_LIST_FRIENDS';
export const DELETE_FRIENDS = 'DELETE_FRIENDS';
export const GET_ONE_FRIENDS = 'GET_ONE_FRIENDS';
export const SAVE_ONE_FRIENDS = 'SAVE_ONE_FRIENDS';
export const SEARCH_FRIENDS = 'SEARCH_FRIENDS';

//action creators
export const addNewFriends = (user: any, sessionData: any, listFriends: any) => ({
	type: ADD_NEW_FRIENDS,
	user,
	sessionData,
	listFriends
});

export const addNewFriendsResponse = (response: string) => ({
	type: ADD_NEW_FRIENDS_RESPONSE,
	response
});

export const saveListFriends = (response: any) => ({
	type: SAVE_LIST_FRIENDS,
	response
});

export const getListFriends = (uid: any) => ({
	type: GET_LIST_FRIENDS,
	uid
});

export const getOneFriends = (value: string, listFriends: any) => ({
	type: GET_ONE_FRIENDS,
	value,
	listFriends
});

export const saveOneFriends = (data: any, listFriends: any) => ({
	type: SAVE_ONE_FRIENDS,
	data,
	listFriends
});

export const deleteFriends = (value: string, uid: any, listFriends: any) => ({
	type: DELETE_FRIENDS,
	value,
	uid,
	listFriends
});

export const searchFriends = (value: string) => ({
	type: SEARCH_FRIENDS,
	value
});
