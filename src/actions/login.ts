//action type
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const CHECK_LOGGED = 'CHECK_LOGGED';

//action creators
export const logIn = () => ({
	type: LOG_IN
});

export const logOut = () => ({
	type: LOG_OUT
});

export const checkLogged = (response: boolean, dataUser: any = {}) => ({
	type: CHECK_LOGGED,
	response,
	data: dataUser
});
