//action type
export const VALID_STATUS_FIELD = 'VALID_STATUS_FIELD';
export const VALIDATE_CHANGE_FIELD = 'VALIDATE_CHANGE_FIELD';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

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
