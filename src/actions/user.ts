//action type
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const USER_COORDINATE = 'USER_COORDINATE';
export const SAVE_USER_COORDINATE = 'SAVE_USER_COORDINATE';
export const SHOW_PASSWORD = 'SHOW_PASSWORD';
export const SHOW_CONFIRM_PASSWORD = 'SHOW_CONFIRM_PASSWORD';
export const VALIDATE_FIELD = 'VALIDATE_FIELD';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
// register user
export const SAVE_USER = 'SAVE_USER';
// login user
export const CHECK_LOGGED = 'CHECK_LOGGED';
//get list users data
export const SNAP_USERS = 'SNAP_USERS';
export const LIST_DATA_USERS = 'LIST_DATA_USERS';
//get user data connected
export const TAKE_DATA_USER = 'TAKE_DATA_USER';
export const ACTUALIZE_DATA_USER = 'ACTUALIZE_DATA_USER';

//action creators
export const changeField = (newValue: string, identifier: string) => ({
	type: CHANGE_FIELD,
	newValue,
	identifier
});

export const validateField = () => ({
	type: VALIDATE_FIELD
});

export const userCoordinate = () => ({
	type: USER_COORDINATE
});

export const saveUserCoordinate = (location: {}) => ({
	type: SAVE_USER_COORDINATE,
	data: location
});

export const showPassword = () => ({
	type: SHOW_PASSWORD
});

export const showConfirmPassword = () => ({
	type: SHOW_CONFIRM_PASSWORD
});

export const logIn = () => ({
	type: LOG_IN
});

export const logOut = () => ({
	type: LOG_OUT
});

export const saveUser = () => ({
	type: SAVE_USER
});

export const checkLogged = (response: boolean, dataUser: any = {}) => ({
	type: CHECK_LOGGED,
	response,
	data: dataUser
});

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
