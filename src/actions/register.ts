//action type
export const VALID_STATUS_FIELD = 'VALID_STATUS_FIELD';
export const VALIDATE_CHANGE_FIELD = 'VALIDATE_CHANGE_FIELD';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SAVE_USER = 'SAVE_USER';
export const USER_COORDINATE = 'USER_COORDINATE';
export const SAVE_USER_COORDINATE = 'SAVE_USER_COORDINATE';
export const SHOW_PASSWORD = 'SHOW_PASSWORD';
export const SHOW_CONFIRM_PASSWORD = 'SHOW_CONFIRM_PASSWORD';
export const DISPLAY_ERROR_FIELD = 'DISPLAY_ERROR_FIELD';

//action creators
export const validStatusField = (status: boolean, message: string, target: string, newValue: any) => ({
	type: VALID_STATUS_FIELD,
	status,
	message,
	target,
	newValue
});

export const validateChangeField = (newValue: string, identifier: string) => ({
	type: VALIDATE_CHANGE_FIELD,
	identifier,
	newValue
});

export const signupSuccess = () => ({
	type: SIGNUP_SUCCESS
});

export const signupError = (err: any) => ({
	type: SIGNUP_ERROR,
	err
});

export const saveUserCoordinate = (location: {}) => ({
	type: SAVE_USER_COORDINATE,
	data: location
});

export const saveUser = () => ({
	type: SAVE_USER
});

export const showPassword = () => ({
	type: SHOW_PASSWORD
});

export const showConfirmPassword = () => ({
	type: SHOW_CONFIRM_PASSWORD
});

export const userCoordinate = () => ({
	type: USER_COORDINATE
});

export const displayErrorField = () => ({
	type: DISPLAY_ERROR_FIELD
});
