//action type
export const SNAP_GAME = 'SNAP_GAME';
export const LIST_GAMES = 'LIST_GAMES';
export const CHOOSE_GAMES = 'CHOOSE_GAMES';

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
