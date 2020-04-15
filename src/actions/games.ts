//action type
export const SNAP_GAME = 'SNAP_GAME';
export const LIST_GAMES = 'LIST_GAMES';

//action creators
export const snapGame = () => ({
	type: SNAP_GAME
});

export const listGames = (dataGames: any) => ({
	type: LIST_GAMES,
	data: dataGames
});
