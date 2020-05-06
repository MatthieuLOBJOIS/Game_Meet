// export const CHANGE_FIELD = 'CHANGE_FIELD';
// export const changeField = (newValue: string, identifier: string) => ({
// 	type: CHANGE_FIELD,
// 	newValue,
// 	identifier
// });
// export const VALIDATE_FIELD = 'VALIDATE_FIELD';
// export const validateField = () => ({
// 	type: VALIDATE_FIELD
// });

//action type
export const SNAP_USERS = 'SNAP_USERS';
export const LIST_DATA_USERS = 'LIST_DATA_USERS';
export const TAKE_DATA_USER = 'TAKE_DATA_USER';
export const ACTUALIZE_DATA_USER = 'ACTUALIZE_DATA_USER';

//action creators
export const snapUsers = () => ({
	type: SNAP_USERS
});

export const listDataUsers = (dataUsers: any) => ({
	type: LIST_DATA_USERS,
	data: dataUsers
});

export const takeDataUser = (uid: string) => ({
	type: TAKE_DATA_USER,
	uid
});

export const actualizeDataUser = (dataUser: any) => ({
	type: ACTUALIZE_DATA_USER,
	data: dataUser
});
