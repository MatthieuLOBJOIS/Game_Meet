//action type
export const SNAP_GAME = 'SNAP_GAME';
export const LIST_GAMES = 'LIST_GAMES';
export const GET_URL_PICTURE_GAMES = 'GET_URL_PICTURE_GAMES';
export const SAVE_LIST_CHOOSE_GAMES = 'SAVE_LIST_CHOOSE_GAMES';

//action creators
export const snapGame = () => ({
	type: SNAP_GAME
});

export const listGames = (dataGames: any) => ({
	type: LIST_GAMES,
	data: dataGames
});

export const getUrlPictureGames = (userGames: any) => ({
	type: GET_URL_PICTURE_GAMES,
	data: userGames
});

export const saveListChooseGames = (listChooseGames: string) => ({
	type: SAVE_LIST_CHOOSE_GAMES,
	data: listChooseGames
});
