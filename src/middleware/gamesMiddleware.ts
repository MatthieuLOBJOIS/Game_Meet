import { db } from '../config/fire';
import { SNAP_GAME, listGames } from '../actions/games';

const gamesMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
		case SNAP_GAME: {
			let games: any = [];
			db.collection('games').get().then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					// doc.data() is never undefined for query doc snapshots
					//console.log(doc.id, ' => ', doc.data());
					games.push(doc.data());
				});

				//console.log(games);
				return store.dispatch(listGames(games));
			});
		}

		default:
			next(action);
	}
};
export default gamesMiddleware;
