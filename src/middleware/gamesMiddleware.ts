import { SNAP_GAME, listGames, GET_URL_PICTURE_GAMES, saveUrlPictureGames } from '../actions/games';
import fire, { db } from '../config/fire';

const gamesMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		// case GET_URL_PICTURE_GAMES: {
		// 	let urlPictureGames: any = [];
		// 	const game = action.data;
		// 	console.log(game);
		// 	let storageRef = fire.storage().ref(game.picture);
		// 	storageRef.getDownloadURL().then((url) => {
		// 		return console.log(url, 'mafonction');
		// 	});
		// }
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
