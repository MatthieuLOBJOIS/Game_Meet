//action type
export const SNAP_GAME = 'SNAP_GAME';
export const LIST_GAMES = 'LIST_GAMES';
export const CHOOSE_GAMES = 'CHOOSE_GAMES';
export const GET_URL_PICTURE_GAMES = 'GET_URL_PICTURE_GAMES';
export const SAVE_URL_PICTURE_GAMES = 'SAVE_URL_PICTURE_GAMES';

//action creators
export const snapGame = () => ({
	type: SNAP_GAME
});

export const listGames = (dataGames: any) => ({
	type: LIST_GAMES,
	data: dataGames
});

export const getChooseGames = (dataGames: any) => ({
	type: CHOOSE_GAMES,
	data: dataGames
});

export const getUrlPictureGames = (userGames: any) => ({
	type: GET_URL_PICTURE_GAMES,
	data: userGames
});

export const saveUrlPictureGames = (url: string) => ({
	type: SAVE_URL_PICTURE_GAMES,
	url
});
