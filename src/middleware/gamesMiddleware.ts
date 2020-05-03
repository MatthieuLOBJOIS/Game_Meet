import { SNAP_GAME, listGames, GET_URL_PICTURE_GAMES, saveListChooseGames } from '../actions/games';
import fire, { db } from '../config/fire';

const gamesMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case GET_URL_PICTURE_GAMES: {
			let listChooseGames: any = [];
			const games = action.data;
			const gamesState = store.getState().games.listGames;
			gamesState.map((gameState: any) => {
				games.map((game: any) => {
					if (gameState.name === game) {
						let storageRef = fire.storage().ref(gameState.picture);
						storageRef.getDownloadURL().then((url) => {
							gameState.picture = url;
							listChooseGames.push(gameState);
							return store.dispatch(saveListChooseGames(listChooseGames));
						});
					}
				});
			});
		}
		case SNAP_GAME: {
			let games: any = [];
			db.collection('games').get().then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					// doc.data() is never undefined for query doc snapshots
					//console.log(doc.id, ' => ', doc.data().picture);
					games.push(doc.data());
				});
				//console.log(games, 'array');
				return store.dispatch(listGames(games));
			});
		}

		default:
			next(action);
	}
};
export default gamesMiddleware;
