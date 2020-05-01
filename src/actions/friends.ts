//action type
export const ADD_NEW_FRIENDS = 'ADD_NEW_FRIENDS';
export const SAVE_LIST_FRIENDS = 'SAVE_LIST_FRIENDS';
export const GET_LIST_FRIENDS = 'GET_LIST_FRIENDS';
export const DELETE_FRIENDS = 'DELETE_FRIENDS';

//action creators
export const addNewFriends = (pseudo: string, sessionData: any, listFriends: any) => ({
	type: ADD_NEW_FRIENDS,
	pseudo,
	sessionData,
	listFriends
});

export const saveListFriends = (response: any) => ({
	type: SAVE_LIST_FRIENDS,
	response
});

export const getListFriends = (uid: any) => ({
	type: GET_LIST_FRIENDS,
	uid
});

export const deleteFriends = (value: string, uid: any, listFriends: any) => ({
	type: DELETE_FRIENDS,
	value,
	uid,
	listFriends
});
