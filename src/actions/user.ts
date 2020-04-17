//action type
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const USER_COORDINATE = 'USER_COORDINATE';
export const SAVE_USER_COORDINATE = 'SAVE_USER_COORDINATE';
export const SHOW_PASSWORD = 'SHOW_PASSWORD';
export const SHOW_CONFIRM_PASSWORD = 'SHOW_CONFIRM_PASSWORD';
export const VALIDATE_FIELD = 'VALIDATE_FIELD';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_LOGGED = 'CHECK_LOGGED';

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

export const checkLogged = (response: boolean) => ({
	type: CHECK_LOGGED,
	response
});
