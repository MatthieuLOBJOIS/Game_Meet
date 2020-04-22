//action type
export const VALID_STATUS_FIELD = 'VALID_STATUS_FIELD';
export const VALIDATE_CHANGE_FIELD = 'VALIDATE_CHANGE_FIELD';

//action creators
export const validStatusField = (status: boolean, message: string, target: string) => ({
	type: VALID_STATUS_FIELD,
	status,
	message,
	target
});

export const validateChangeField = (newValue: string, identifier: string) => ({
	type: VALIDATE_CHANGE_FIELD,
	identifier,
	newValue
});
